interface WriteFileProps {
  file: File
  filename: string
}
type WriteFileType = Promise<{ success: true; file: File } | { success: false }>

export const writeFile = async ({
  file,
  filename
}: WriteFileProps): WriteFileType => {
  const makeDirectory = async (
    root: FileSystemDirectoryHandle,
    pathname: string[]
  ): Promise<FileSystemFileHandle> => {
    if (pathname.length > 1) {
      const directory = await root.getDirectoryHandle(pathname[0], {
        create: true
      })

      return await makeDirectory(directory, pathname.slice(1))
    }

    return await root.getFileHandle(pathname[0], { create: true })
  }

  try {
    const systemFile = await makeDirectory(
      await navigator.storage.getDirectory(),
      filename.split('/')
    )
    const writable = await systemFile.createWritable()
    await writable.write(file)
    await writable.close()

    return { file: await systemFile.getFile(), success: true }
  } catch (err) {
    console.error(err)

    return { success: false }
  }
}
