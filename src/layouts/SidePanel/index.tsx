import { createSignal, type Component } from 'solid-js'
import styles from './_sidePanel.css.ts'
import OpenBtn from './components/OpenBtn.tsx'
import BackgroundConfigPanel from '@components/Background/config/Panel.tsx'

const SidePanelLayout: Component = () => {
  const [isActive, setActive] = createSignal(false)

  return (
    <div class={styles.componentWrapper}>
      <aside
        class={styles.sidePanelContainer}
        style={{ width: isActive() ? '25em' : '0' }}
      >
        <BackgroundConfigPanel />
      </aside>
      <OpenBtn onClick={() => setActive(prev => !prev)} />
    </div>
  )
}

export default SidePanelLayout
