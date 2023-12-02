import { type Component } from 'solid-js'

import PageWrapper from '@components/Container/PageWrapper/PageWrapper.tsx'
import Clock from '@components/Clock/Clock.tsx'
import Background from '@components/Background/Background.tsx'

import '@styles/global.css.ts'

const App: Component = () => {
  return (
    <PageWrapper>
      <Background />
      <Clock />
    </PageWrapper>
  )
}

export default App
