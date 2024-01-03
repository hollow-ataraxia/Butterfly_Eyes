import createDirRec from '@/utils/fileSystem/makeDirRec.ts'

interface WriteFileOptions {
  file: File
  path: string
}
type WriteFileType = Promise<
  { success: true; file: FileSystemFileHandle } | { success: false }
>

async function writeFiles({ path, file }: WriteFileOptions): WriteFileType {
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
