import { z } from 'zod'

export const settingsScheme = z.object({})

export type Settings = z.infer<typeof settingsScheme>
