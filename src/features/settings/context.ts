import { createContext } from 'solid-js'
import { type SetStoreFunction, createStore } from 'solid-js/store'
import { type Settings } from './scheme.ts'

export type SettingsContextType = readonly [
  state: Settings,
  setState: SetStoreFunction<Settings>
]

export const makeSettingsContext = (): SettingsContextType => {
  const [state, setState] = createStore<Settings>({ background: {} })

  return [state, setState]
}

export const SettingsContext = createContext<SettingsContextType>(
  makeSettingsContext()
)
