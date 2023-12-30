import makeDirRec from '@features/backgroundFile/utils/makeDirRec.ts'

const deleteFile = async (filename: string): Promise<void> => {
  const parentDir = await makeDirRec('Pictures/Wallpapers')
  await parentDir.removeEntry(filename)
}

export default deleteFile
