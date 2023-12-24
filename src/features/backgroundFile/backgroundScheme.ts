import { z } from 'zod'

export const backgroundScheme = z.object({
  file: z.instanceof(File).optional()
})

export type BackgroundType = z.infer<typeof backgroundScheme>
