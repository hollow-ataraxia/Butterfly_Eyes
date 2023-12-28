import { createContainer, style } from '@vanilla-extract/css'

export const sidePanelContainer = createContainer()

export default {
  componentWrapper: style({
    display: 'flex',
    position: 'fixed',
    alignItems: 'flex-start',
    height: '100%',
    top: 0,
    left: 0
  }),

  sidePanelContainer: style({
    transition: 'ease-in-out 300ms',
    overflow: 'hidden',
    height: '100%',
    textWrap: 'nowrap',
    backgroundColor: 'hsla(0, 0% ,0%, 0.8)',
    containerName: sidePanelContainer
  }),

  OpenBtn: style({
    all: 'unset',
    display: 'block',
    width: '40px',
    color: 'currentColor'
  })
}
