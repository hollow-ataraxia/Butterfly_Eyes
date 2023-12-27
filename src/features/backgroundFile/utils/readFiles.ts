import makeDirRec from './makeDirRec.ts'

async function readFiles(path: string): Promise<File[]> {
  const files = new Array<File>()
  const dirHandle = await makeDirRec(path)

  for await (const [, handle] of dirHandle)
    if (handle.kind === 'file') files.push(await handle.getFile())

  return files
}

export default readFiles
