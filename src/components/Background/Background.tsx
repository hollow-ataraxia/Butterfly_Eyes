import { type Component, Show, onMount } from 'solid-js'
import { useSettings } from '@features/settings/provider.tsx'
import { readFile } from '@features/backgroundFile/utils/readFile.ts'

import * as styles from './styles.css.ts'

const Background: Component = () => {
  const [settings, dispatch] = useSettings()

  onMount(() => {
    const loadFile = async (): Promise<void> => {
      const file = await readFile({
        root: await navigator.storage.getDirectory(),
        pathname: ['background']
      })
      if (file != null) dispatch({ background: { file: await file.getFile() } })
    }

    void loadFile()
  })

  return (
    <div>
      <Show when={settings?.background?.file}>
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
