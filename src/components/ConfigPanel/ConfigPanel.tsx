import {
  type JSX,
  type Component,
  createSignal,
  createUniqueId
} from 'solid-js'
import { Portal } from 'solid-js/web'
import { useSettings } from '@features/settings/provider.tsx'
import { saveFile } from '@features/backgroundFile/handleStorage.ts'

import { GearSVG } from './gear.js'
import * as styles from './Settings.css.js'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>

interface SettingsProps {
  children?: JSX.Element
}

const Settings: Component<SettingsProps> = () => {
  const [modalStatus, setModal] = createSignal<boolean>(false)
  const [, { setBackground }] = useSettings()
  const inputId = createUniqueId()

  const inputBackgroundEvent: InputEventHandler = event => {
    const { files } = event.currentTarget

    if (files?.[0] != null) {
      void (async () => {
        setBackground(await saveFile(files[0], 'background'))
      })()
    }
  }

  return (
    <Portal>
      <button
        onClick={() => setModal(prev => !prev)}
        style={{
          all: 'unset',
          position: 'absolute',
          top: '1em',
          left: '1em'
        }}
        type="button"
      >
        {GearSVG}
      </button>

      <dialog class={styles.dialog} open={modalStatus()}>
        <input
          type="file"
          accept="image/*"
          id={inputId}
          onInput={inputBackgroundEvent}
        />
      </dialog>
    </Portal>
  )
}

export default Settings
