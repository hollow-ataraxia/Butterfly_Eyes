import type { JSX, Component } from 'solid-js'
import { createSignal, createUniqueId } from 'solid-js'
import writeFiles from '@features/backgroundFile/utils/writeFile.ts'
import { GearSVG } from './gear.tsx'
import styles from './Settings.css.ts'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>
interface SettingsProps {
  children?: JSX.Element
}

const Settings: Component<SettingsProps> = () => {
  const [modalStatus, setModal] = createSignal<boolean>(false)
  const inputId = createUniqueId()

  const inputBackgroundEvent: InputEventHandler = event => {
    if (event.currentTarget.files != null) {
      const [file] = event.currentTarget.files

      void writeFiles({ file, path: 'Pictures/Wallpapers' })
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
