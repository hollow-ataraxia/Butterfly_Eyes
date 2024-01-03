import { useContext } from 'solid-js/types/server/reactive.js'
import { type SettingsContextType, SettingsContext } from './makeSettings'

export const useSettings = (): SettingsContextType =>
  useContext(SettingsContext)
