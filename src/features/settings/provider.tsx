import { type JSX, type Component, useContext } from 'solid-js'

import {
  type SettingsContextType,
  makeSettingsContext,
  SettingsContext
} from './context.ts'

export const useSettings = (): SettingsContextType =>
  useContext(SettingsContext)

export const SettingsProvider: Component<{ children: JSX.Element }> = props => {
  return (
    <SettingsContext.Provider value={makeSettingsContext()}>
      {props.children}
    </SettingsContext.Provider>
  )
}
