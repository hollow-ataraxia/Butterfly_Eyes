import { createContainer, style } from '@vanilla-extract/css'

export const rootLayoutContainer = createContainer()

export default {
  PageWrapper: style({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100dvh',
    containerName: rootLayoutContainer
  })
}
