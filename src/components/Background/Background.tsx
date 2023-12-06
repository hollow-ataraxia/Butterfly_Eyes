import { type Component, Show, onMount } from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import { loadFile } from '@features/backgroundFile/handleStorage.ts'

import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [{ background }, { setBackground }] = useSettings()

  onMount(() => {
    void (async (): Promise<void> => {
      const file = await loadFile('background')

      if (file != null) setBackground(URL.createObjectURL(file))
    })()
  })

  return (
    <div>
      <Show when={background()}>
        {background => (
          <img class={styles.background} src={background()} loading="eager" />
        )}
      </Show>
    </div>
  )
}

export default Background
