import { type JSX, type Component, createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'

import { useSettings } from '@features/settings/provider.tsx'
import { writeFile } from '@features/backgroundFile/handleStorage.ts'
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

      void writeFile(file, 'background').then(result => {
        if (result.success) dispatch({ background: { file } })
      })
    }
  }

  return (
    <Portal>
      <button
        onClick={() => setModal(prev => !prev)}
        type="button"
        class={styles.configBtn}
      >
        {GearSVG}
      </button>

      <dialog class={styles.dialog} open={modalStatus()}>
        <input type="file" accept="image/*" onInput={inputBackgroundEvent} />
      </dialog>
    </Portal>
  )
}

export default Settings
