import { z } from 'zod'

export const backgroundScheme = z.object({
  files: z.instanceof(File).array().optional()
})

export type BackgroundType = z.infer<typeof backgroundScheme>
