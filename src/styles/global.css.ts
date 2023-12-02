import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, :after, :before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

globalStyle('html', {
  fontSize: '100%',
  fontFamily: 'system-ui'
})

globalStyle('body', {
  color: 'white'
})

globalStyle('ol, ul, menu', { listStyle: 'none' })
