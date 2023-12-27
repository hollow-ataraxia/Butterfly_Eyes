import { type Component, type JSX } from 'solid-js'
import { SettingsProvider } from '@features/settings/provider.tsx'
import PageWrapper from './components/PageWrapper.tsx'

const RootLayout: Component<{ children: JSX.Element }> = props => {
  return (
    <PageWrapper>
      <SettingsProvider>{props.children}</SettingsProvider>
    </PageWrapper>
  )
}

export default RootLayout
