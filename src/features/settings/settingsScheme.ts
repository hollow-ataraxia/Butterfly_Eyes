import { z } from 'zod'
import { backgroundScheme } from '@features/backgroundFile/utils/backgroundScheme'

export const settingsScheme = z.object({
  background: backgroundScheme
})

export type Settings = z.infer<typeof settingsScheme>
