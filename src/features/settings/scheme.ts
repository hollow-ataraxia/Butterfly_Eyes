import { z } from 'zod'

export const settingsScheme = z.object({
  background: z.object({
    file: z.instanceof(File).optional()
  })
})

export type Settings = z.infer<typeof settingsScheme>
