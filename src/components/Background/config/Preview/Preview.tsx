import { createResource, type Component } from 'solid-js'

interface PreviewProps {
  fileHandle: FileSystemFileHandle
}

const getFileURI = async (fileHandle: FileSystemFileHandle): Promise<string> =>
  URL.createObjectURL(await fileHandle.getFile())

export const Preview: Component<PreviewProps> = props => {
  const [fileURI] = createResource(() => props.fileHandle, getFileURI)

  return (
    <figure>
      <img
        style={{ height: '10em', width: '100%', 'object-fit': 'cover' }}
        src={fileURI()}
        loading="lazy"
      />
    </figure>
  )
}

export default Preview
