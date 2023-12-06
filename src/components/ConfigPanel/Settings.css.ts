import { style } from '@vanilla-extract/css'

export const showModalBtn = style({
  all: 'unset',
  position: 'absolute',
  top: '1em',
  left: '1em'
})

export const configBtn = style({})

export const dialog = style({
  // position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
