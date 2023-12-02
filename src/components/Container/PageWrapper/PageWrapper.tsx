import { type JSX, type Component } from 'solid-js'

import * as styles from './styles.css.ts'

const PageWrapper: Component<{ children: JSX.Element }> = props => {
  return <div class={styles.PageWrapper}>{props.children}</div>
}

export default PageWrapper
