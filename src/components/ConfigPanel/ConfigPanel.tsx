import { type JSX, type Component, createSignal } from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import { writeFile } from '@features/backgroundFile/utils/writeFile.ts'
import { GearSVG } from './gear.js'
import * as styles from './Settings.css.js'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>
interface SettingsProps {
  children?: JSX.Element
}

const Settings: Component<SettingsProps> = () => {
  const [modalStatus, setModal] = createSignal<boolean>(false)
  const [, dispatch] = useSettings()

  const inputBackgroundEvent: InputEventHandler = event => {
    if (event.currentTarget.files != null) {
      const [file] = event.currentTarget.files

      void writeFile({ file, filename: 'background' }).then(result => {
        if (result.success) dispatch({ background: { file } })
      })
    }
  }

  return (
    <aside>
      <section
        style={{ width: modalStatus() ? 'auto' : '0px', overflow: 'hidden' }}
      >
        <input type="file" accept="image/*" onInput={inputBackgroundEvent} />
      </section>
      <button
        onClick={() => setModal(prev => !prev)}
        type="button"
        class={styles.configBtn}
      >
        {GearSVG}
      </button>
    </aside>
  )
}

export default Settings
