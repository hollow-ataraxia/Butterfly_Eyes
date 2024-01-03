import 'typescript/lib/lib.es.AsyncIterable'

// https://github.com/microsoft/TypeScript/issues/29867
declare global {
  interface FileSystemDirectoryHandle {
    [Symbol.asyncIterator]: () => AsyncIterableIterator<
      [string, FileSystemFileHandle | FileSystemDirectoryHandle]
    >
    entries: () => AsyncIterableIterator<
      [string, FileSystemFileHandle | FileSystemDirectoryHandle]
    >
    keys: () => AsyncIterableIterator<string>
    values: () => AsyncIterableIterator<
      FileSystemFileHandle | FileSystemDirectoryHandle
    >
  }
}
