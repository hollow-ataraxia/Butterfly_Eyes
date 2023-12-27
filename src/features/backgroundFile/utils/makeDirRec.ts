export async function createDirRec(
  path: string[],
  root: FileSystemDirectoryHandle
): Promise<FileSystemDirectoryHandle> {
  const dir = await root.getDirectoryHandle(path[0], { create: true })

  if (path.length > 1) return await createDirRec(path.slice(1), dir)

  return root
}

export default async function createDirRecAdapter(
  path: string
): ReturnType<typeof createDirRec> {
  return await createDirRec(
    path.split('/').filter(elm => elm !== ''),
    await navigator.storage.getDirectory()
  )
}
