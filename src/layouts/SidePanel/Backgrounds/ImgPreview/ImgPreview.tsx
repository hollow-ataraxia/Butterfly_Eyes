import { type Component, createResource } from 'solid-js'
import deleteFile from '@/services/deleteFile.ts'
import * as styles from './imgPreview.css.ts'

interface PreviewProps {
  fileHandle: FileSystemFileHandle
}

const getFileURI = async (fileHandle: FileSystemFileHandle): Promise<string> =>
  URL.createObjectURL(await fileHandle.getFile())

const DeleteBtnIcon: Component = () => {
  return (
    <span class={styles.deleteBtnIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width={1.5}
        stroke="currentColor"
        class="w-6 h-6"
        width="2em"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </span>
  )
}

export const Preview: Component<PreviewProps> = props => {
  const [fileURI] = createResource(() => props.fileHandle, getFileURI)

  return (
    <figure class={styles.ImgPreviewContainer}>
      <img class={styles.image} src={fileURI()} loading="lazy" />

      <button
        type="button"
        class={styles.deleteBtn}
        onClick={() => {
          void deleteFile(props.fileHandle.name)
        }}
      >
        <DeleteBtnIcon />
      </button>
    </figure>
  )
}

export default Preview
