import { type Component, Show, createEffect, createSignal } from 'solid-js'
import { useBackgrounds } from '@/context/backgrounds/selector.ts'
import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [backgrounds] = useBackgrounds()
  const [file, setFile] = createSignal<string>()

  createEffect(() => {
    const files = backgrounds()

    if (files.length > 1) {
      void files[Math.floor(Math.random() * files.length)]
        .getFile()
        .then(file => setFile(URL.createObjectURL(file)))
    }
  })

  return (
    <div>
      <Show when={file()}>
        {file => <img class={styles.background} src={file()} loading="eager" />}
      </Show>
    </div>
  )
}

export default Background
