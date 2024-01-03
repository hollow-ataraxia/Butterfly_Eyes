import { type Component } from 'solid-js'
import RootLayout from './layouts/Root'
import SidePanelLayout from './layouts/SidePanel'
import Widgets from './layouts/Widgets'

import '@styles/global.css.ts'

const App: Component = () => {
  return (
    <RootLayout>
      <SidePanelLayout />
      <Widgets />
    </RootLayout>
  )
}

export default App
