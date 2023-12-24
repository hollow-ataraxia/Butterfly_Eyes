import { createContext } from 'solid-js'
import { type SetStoreFunction, createStore } from 'solid-js/store'
import { type Settings, settingsScheme } from './settingsScheme.ts'

export type SettingsContextType = readonly [
  state: Settings,
  setState: SetStoreFunction<Settings>
]

export const makeSettingsContext = (): SettingsContextType => {
  const localState = localStorage.getItem('settings')
  const settings: Settings = localState != null ? JSON.parse(localState) : {}
  const data = settingsScheme.safeParse(settings)

  const [state, setState] = createStore<Settings>(
    data.success ? data.data : { background: {} }
  )

  return [state, setState]
}

export const SettingsContext = createContext<SettingsContextType>(
  makeSettingsContext()
)
