import { type Component } from 'solid-js'

import { SettingsProvider } from '@features/settings/provider.tsx'
import PageWrapper from '@components/Container/PageWrapper/PageWrapper.tsx'
import Settings from '@components/ConfigPanel/ConfigPanel.tsx'
import Background from '@components/Background/Background.tsx'
import Clock from '@components/Clock/Clock.tsx'

import '@styles/global.css.ts'

const App: Component = () => {
  return (
    <PageWrapper>
      <SettingsProvider>
        <Settings />
        <Background />
        <Clock />
      </SettingsProvider>
    </PageWrapper>
  )
}

export default App
