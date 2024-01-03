import { type JSX, type Component } from 'solid-js'
import styles from '../_rootLayout.css.ts'
import { SettingsProvider } from '@/context/settings/settingsProvider.tsx'

const PageWrapper: Component<{ children: JSX.Element }> = props => {
  return (
    <div class={styles.PageWrapper}>
      <SettingsProvider>{props.children}</SettingsProvider>
    </div>
  )
}

export default PageWrapper
