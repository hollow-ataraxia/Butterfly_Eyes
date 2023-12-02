export async function saveFile(file: File, filename: string): Promise<File> {
  const root = await navigator.storage.getDirectory()
  const background = await root.getFileHandle(filename, { create: true })
  const writable = await background.createWritable()

  await writable.write(file)
  await writable.close()

  return await background.getFile()
}

export async function loadFile(filename: string): Promise<File | null> {
  const root = await navigator.storage.getDirectory()

  try {
    return await (await root.getFileHandle(filename)).getFile()
  } catch {
    return null
  }
}
