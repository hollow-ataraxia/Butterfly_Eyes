import makeDirRec from '@/utils/fileSystem/makeDirRec.ts'

async function readFiles(path: string): Promise<FileSystemFileHandle[]> {
  const files = new Array<FileSystemFileHandle>()
  const dirHandle = await makeDirRec(path)

  for await (const [, handle] of dirHandle)
    if (handle.kind === 'file') files.push(handle)

  return files
}

export default readFiles
