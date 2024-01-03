import { type Component } from 'solid-js'
import Clock from './Clock/Clock.tsx'
import Background from './Background/Background.tsx'

const Widgets: Component = props => {
  return (
    <>
      <Clock />
      <Background />
    </>
  )
}

export default Widgets
