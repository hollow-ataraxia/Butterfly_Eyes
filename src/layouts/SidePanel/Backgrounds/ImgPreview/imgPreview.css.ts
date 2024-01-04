import { style } from '@vanilla-extract/css'

export default {
  ImgPreviewContainer: style({
    position: 'relative'
  }),
  image: style({
    height: '10em',
    width: '100%',
    objectFit: 'cover'
  })
}
