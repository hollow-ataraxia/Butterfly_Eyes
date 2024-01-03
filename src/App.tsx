import { type Component } from 'solid-js'
import RootLayout from './layouts/Root'
import SidePanelLayout from './layouts/SidePanel'
import Background from '@/layouts/Widgets/Background/Background'
import Clock from '@/layouts/Widgets/Clock/Clock'

import '@styles/global.css.ts'

const App: Component = () => {
  return (
    <RootLayout>
      <SidePanelLayout />
      <Background />
      <Clock />
    </RootLayout>
  )
}

export default App
