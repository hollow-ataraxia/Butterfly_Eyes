import makeDirRec from '@/utils/fileSystem/makeDirRec.ts'
import { useBackgrounds } from '@/context/backgrounds/selector'

const deleteFile = async (filename: string): Promise<void> => {
  const [, { setFileHandles }] = useBackgrounds()

  const parentDir = await makeDirRec('Pictures/Wallpapers')
  await parentDir.removeEntry(filename)

  setFileHandles(prev => prev.filter(file => file.name !== filename))
}

export default deleteFile
