import { z } from 'zod'

export const backgroundScheme = z.object({
  files: z.instanceof(FileSystemFileHandle).array().optional()
})

export type BackgroundType = z.infer<typeof backgroundScheme>
