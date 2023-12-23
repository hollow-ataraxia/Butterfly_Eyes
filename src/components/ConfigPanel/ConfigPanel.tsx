import {
  type JSX,
  type Component,
  createSignal,
  createUniqueId
} from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import { writeFile } from '@features/backgroundFile/utils/writeFile.ts'
import { GearSVG } from './gear.tsx'
import styles from './Settings.css.ts'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>
interface SettingsProps {
  children?: JSX.Element
}

const Settings: Component<SettingsProps> = () => {
  const [modalStatus, setModal] = createSignal<boolean>(false)
  const [, dispatch] = useSettings()
  const inputId = createUniqueId()

  const inputBackgroundEvent: InputEventHandler = event => {
    if (event.currentTarget.files != null) {
      const [file] = event.currentTarget.files

      void writeFile({ file, filename: 'background' }).then(result => {
        if (result.success) dispatch({ background: { file } })
      })
    }
  }

  return (
    <aside class={styles.aside}>
      <section
        classList={{
          [styles.collapse]: true,
          [styles.collapseClose]: modalStatus()
        }}
      >
        <div class={styles.devMargin}>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onInput={inputBackgroundEvent}
          />
          <label for={inputId} class={styles.inputLabel}>
            Chose background
          </label>
        </div>
      </section>
      <button
        type="button"
        class={styles.configBtn}
        onClick={() => setModal(prev => !prev)}
      >
        {GearSVG}
      </button>
    </aside>
  )
}

export default Settings
