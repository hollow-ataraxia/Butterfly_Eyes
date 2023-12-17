interface ReadFileOptions {
  pathname: string[]
  root: FileSystemDirectoryHandle
  create?: boolean
}

export async function readFile({
  pathname,
  root,
  create
}: ReadFileOptions): Promise<FileSystemFileHandle | undefined> {
  try {
    if (pathname.length > 1) {
      const directory = await root.getDirectoryHandle(pathname[0], {
        create
      })

      return await readFile({
        pathname: pathname.slice(1),
        root: directory
      })
    }

    return await root.getFileHandle(pathname[0], { create })
  } catch {}
}
