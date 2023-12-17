export async function readFile(filename: string): Promise<File | null> {
  const root = await navigator.storage.getDirectory()

  try {
    return await (await root.getFileHandle(filename)).getFile()
  } catch {
    return null
  }
}
