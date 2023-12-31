import { z } from 'zod'
import { backgroundScheme } from '@components/Background/backgroundScheme.ts'

export const settingsScheme = z.object({
  background: backgroundScheme.optional()
})

export type Settings = z.infer<typeof settingsScheme>
