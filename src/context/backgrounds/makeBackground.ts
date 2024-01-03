import {
  type Accessor,
  type Setter,
  createSignal,
  createContext
} from 'solid-js'

export type BackgroundType = readonly [
  state: Accessor<FileSystemFileHandle[]>,
  {
    setFileHandles: Setter<FileSystemFileHandle[]>
  }
]

export const makeBackgroundContext = (): BackgroundType => {
  const [state, setState] = createSignal<FileSystemFileHandle[]>([])

  return [state, { setFileHandles: setState }]
}

export const BackgroundContext = createContext<BackgroundType>(
  makeBackgroundContext()
)
