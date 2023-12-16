import { type Component, Show, onMount } from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import { readFile } from '@features/backgroundFile/handleStorage.ts'

import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [settings, dispatch] = useSettings()

  onMount(() => {
    void readFile('background').then(file => {
      if (file != null) dispatch({ background: { file } })
    })
  })

  return (
    <div>
      <Show when={settings.background.file}>
        {background => (
          <img
            class={styles.background}
            src={URL.createObjectURL(background())}
            loading="eager"
          />
        )}
      </Show>
    </div>
  )
}

export default Background
