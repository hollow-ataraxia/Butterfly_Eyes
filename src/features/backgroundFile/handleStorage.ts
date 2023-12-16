type WriteFileType = { success: true; file: File } | { success: false }

export async function writeFile(
  file: File,
  filename: string
): Promise<WriteFileType> {
  const root = await navigator.storage.getDirectory()
  const background = await root.getFileHandle(filename, { create: true })

  try {
    const writable = await background.createWritable()
    await writable.write(file)
    await writable.close()

    return { success: true, file: await background.getFile() }
  } catch {
    return { success: false }
  }
}

export async function readFile(filename: string): Promise<File | null> {
  const root = await navigator.storage.getDirectory()

  try {
    return await (await root.getFileHandle(filename)).getFile()
  } catch {
    return null
  }
}
