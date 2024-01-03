import { type JSX, type Component } from 'solid-js'
import { makeSettingsContext, SettingsContext } from './makeSettings.ts'

export const SettingsProvider: Component<{ children: JSX.Element }> = props => {
  return (
    <SettingsContext.Provider value={makeSettingsContext()}>
      {props.children}
    </SettingsContext.Provider>
  )
}
