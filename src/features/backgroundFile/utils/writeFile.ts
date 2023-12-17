import { readFile } from './readFile.ts'

interface WriteFileProps {
  file: File
  filename: string
}
type WriteFileType = Promise<{ success: true; file: File } | { success: false }>

export const writeFile = async ({
  file,
  filename
}: WriteFileProps): WriteFileType => {
  const fileHandle = await readFile({
    root: await navigator.storage.getDirectory(),
    pathname: filename.split('/'),
    create: true
  })
  const writable = await fileHandle?.createWritable()

  if (fileHandle != null && writable != null) {
    await writable.write(file)
    await writable.close()

    return { file: await fileHandle?.getFile(), success: true }
  }

  return { success: false }
}
