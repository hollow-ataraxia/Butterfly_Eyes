import { type Component } from 'solid-js'

import Settings from '@components/ConfigPanel/ConfigPanel.tsx'
import Background from '@components/Background/Background.tsx'
import Clock from '@components/Clock/Clock.tsx'

import '@styles/global.css.ts'
import RootLayout from './layouts/Root'

const App: Component = () => {
  return (
    <RootLayout>
      <Settings />
      <Background />
      <Clock />
    </RootLayout>
  )
}

export default App
