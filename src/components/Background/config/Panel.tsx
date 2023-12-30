import {
  type JSX,
  type Component,
  createUniqueId,
  onMount,
  For
} from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import writeFiles from '@features/SystemFiles/utils/writeFile'
import readFiles from '@features/SystemFiles/utils/readFiles.ts'
import Preview from './Preview.tsx'
import styles from './_config.css.ts'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>

const BackgroundConfigPanel: Component = () => {
  const [settings, dispatch] = useSettings()
  const inputId = createUniqueId()

  onMount(() => {
    void readFiles('Pictures/Wallpapers').then(files => {
      dispatch({ background: { files } })
    })
  })

  const inputBackgroundEvent: InputEventHandler = event => {
    if (event.currentTarget.files != null) {
      const [file] = event.currentTarget.files

      void writeFiles({ file, path: 'Pictures/Wallpapers' }).then(res => {
        if (res.success)
          dispatch(prev => ({
            background: { files: prev.background?.files?.concat(res.file) }
          }))
      })
    }
  }

  return (
    <section class={styles.panel}>
      <h4>Backgrounds</h4>
      <div>
        <input
          type="file"
          id={inputId}
          style={{ display: 'none' }}
          onInput={inputBackgroundEvent}
        />
        <label for={inputId} class={styles.inputFileLabel}>
          Upload
        </label>
      </div>

      <div class={styles.imagesGrid}>
        <For each={settings.background?.files}>
          {file => <Preview fileHandle={file} />}
        </For>
      </div>
    </section>
  )
}

export default BackgroundConfigPanel
