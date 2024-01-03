import { createResource, type Component } from 'solid-js'
import { useBackgrounds } from '@/context/backgrounds/selector'
import readFiles from '@/services/readFiles.ts'
import deleteFile from '@/services/deleteFile.ts'

interface PreviewProps {
  fileHandle: FileSystemFileHandle
}

const getFileURI = async (fileHandle: FileSystemFileHandle): Promise<string> =>
  URL.createObjectURL(await fileHandle.getFile())

export const Preview: Component<PreviewProps> = props => {
  const [, { setFileHandles }] = useBackgrounds()
  const [fileURI] = createResource(() => props.fileHandle, getFileURI)

  return (
    <figure style={{ position: 'relative' }}>
      <img
        style={{ height: '10em', width: '100%', 'object-fit': 'cover' }}
        src={fileURI()}
        loading="lazy"
      />

      <button
        type="button"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onClick={() => {
          void deleteFile(props.fileHandle.name).then(async () => {
            const files = await readFiles('Pictures/Wallpapers')
            setFileHandles(files)
          })
        }}
      >
        Delete
      </button>
    </figure>
  )
}

export default Preview
