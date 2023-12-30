import { type Component, Show, createEffect, createSignal } from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [settings] = useSettings()
  const [background, setBackground] = createSignal<string>()

  createEffect(() => {
    const files = settings.background?.files

    if (files != null) {
      void files[Math.floor(Math.random() * files.length)]
        .getFile()
        .then(file => setBackground(URL.createObjectURL(file)))
    }
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
