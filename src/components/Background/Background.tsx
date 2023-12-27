import { type Component, Show, onMount, createSignal } from 'solid-js'
import readFiles from '@features/backgroundFile/utils/readFiles.ts'

import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [background, setBackground] = createSignal<string>()

  onMount(() => {
    void (async (): Promise<void> => {
      const files = await readFiles('Pictures/Wallpapers')
      setBackground(
        URL.createObjectURL(files[Math.floor(Math.random() * files.length)])
      )
    })()
  })

  return (
    <div>
      <Show when={background()}>
        {file => <img class={styles.background} src={file()} loading="eager" />}
      </Show>
    </div>
  )
}

export default Background
