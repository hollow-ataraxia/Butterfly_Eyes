import { useContext } from 'solid-js'
import { type BackgroundType, BackgroundContext } from './makeBackground.ts'

export const useBackgrounds = (): BackgroundType =>
  useContext(BackgroundContext)
