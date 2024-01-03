import { createContext } from 'solid-js'
import { type Store, type SetStoreFunction, createStore } from 'solid-js/store'
import { type Settings, settingsScheme } from '@/models/settings.ts'

export type SettingsContextType = readonly [
  state: Store<Settings>,
  setState: SetStoreFunction<Settings>
]

export const makeSettingsContext = (): SettingsContextType => {
  const localState = localStorage.getItem('settings')
  const settings = settingsScheme.safeParse(
    localState != null ? JSON.parse(localState) : {}
  )

  const [state, setState] = createStore<Settings>(
    settings.success ? settings.data : {}
  )

  return [state, setState]
}

export const SettingsContext = createContext<SettingsContextType>(
  makeSettingsContext()
)
