import {
  type JSX,
  type Component,
  createUniqueId,
  onMount,
  For
} from 'solid-js'
import { useBackgrounds } from '@/context/backgrounds/selector.ts'
import writeFiles from '@/services/writeFile.ts'
import readFiles from '@/services/readFiles.ts'
import Preview from './ImgPreview/ImgPreview.tsx'
import styles from './backgrounds.css.ts'

type InputEventHandler = JSX.EventHandler<HTMLInputElement, InputEvent>

const BackgroundConfigPanel: Component = () => {
  const [backgrounds, { setFileHandles }] = useBackgrounds()
  const inputId = createUniqueId()

  onMount(() => {
    void readFiles('Pictures/Wallpapers').then(files => {
      setFileHandles(files)
    })
  })

  const inputBackgroundEvent: InputEventHandler = event => {
    if (event.currentTarget.files != null) {
      const [file] = event.currentTarget.files

      void writeFiles({ file, path: 'Pictures/Wallpapers' }).then(res => {
        if (res.success) setFileHandles(prev => prev.concat(res.file))
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
        <For each={backgrounds()}>{file => <Preview fileHandle={file} />}</For>
      </div>
    </section>
  )
}

export default BackgroundConfigPanel
