import { type Component } from 'solid-js'
import RootLayout from './layouts/Root'
import SidePanelLayout from './layouts/SidePanel'
import Background from '@components/Background/Background.tsx'
import Clock from '@components/Clock/Clock.tsx'

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
