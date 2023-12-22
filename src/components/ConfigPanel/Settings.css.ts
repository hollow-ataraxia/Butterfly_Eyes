import { style } from '@vanilla-extract/css'

export default {
  aside: style({
    display: 'flex',
    position: 'fixed',
    alignItems: 'flex-start',
    height: '100%',
    top: 0,
    left: 0
  }),

  configBtn: style({
    all: 'unset',
    margin: '.5em'
  }),

  collapse: style({
    transition: 'ease-in-out 300ms',
    overflow: 'hidden',
    height: '100%',
    backgroundColor: 'hsla(0, 0% ,0%, 0.8)',
    width: '15em'
  }),
  collapseClose: style({
    width: '0px'
  }),

  devMargin: style({
    margin: '.5em'
  }),

  inputLabel: style({ textWrap: 'nowrap' })
}
