import createDirRec from './makeDirRec.ts'

interface ReadFilesOptions {
  file: File
  path: string
}
type WriteFileType = Promise<
  { success: true; file: FileSystemFileHandle } | { success: false }
>

async function writeFiles({ path, file }: ReadFilesOptions): WriteFileType {
  const dirHandle = await createDirRec(path)

  try {
    const fileHandle = await dirHandle.getFileHandle(file.name, {
      create: true
    })
    const writable = await fileHandle.createWritable()
    await writable.write(file)
    await writable.close()

    return { success: true, file: fileHandle }
  } catch {
    return { success: false }
  }
}

export default writeFiles
