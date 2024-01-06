import { useContext } from 'solid-js'
import { type SettingsContextType, SettingsContext } from './makeSettings.ts'

export const useSettings = (): SettingsContextType =>
  useContext(SettingsContext)
