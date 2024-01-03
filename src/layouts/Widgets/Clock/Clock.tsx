import { type Component, createSignal, onCleanup } from 'solid-js'

import * as styles from './styles.css.ts'

const timeFormater = Intl.DateTimeFormat('en-us', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
})

const Clock: Component = () => {
  const [time, setTime] = createSignal<number>(Date.now())
  const timeInterval = setInterval(() => setTime(Date.now()), 400)

  onCleanup(() => {
    clearInterval(timeInterval)
  })

  return (
    <div>
      <b class={styles.text}>{timeFormater.format(time())}</b>
    </div>
  )
}

export default Clock
