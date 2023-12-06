import {
  type Accessor,
  type Setter,
  createContext,
  createSignal
} from 'solid-js'

export type SettingsContextType = readonly [
  {
    readonly background: Accessor<string | undefined>
  },
  {
    readonly setBackground: Setter<string | undefined>
  }
]

export const makeSettingsContext = (): SettingsContextType => {
  const [background, setBackground] = createSignal<string>()

  return [{ background }, { setBackground }]
}

export const SettingsContext = createContext<SettingsContextType>(
  makeSettingsContext()
)
