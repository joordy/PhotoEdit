import { addCanvas, img } from './elements/index'

export const drawCanvas = (content, props) => {
  // Canvas
  let canvas = addCanvas('imageCanvas')
  content.appendChild(canvas)
  // Image
  let elem = img(props.urls.regular, 'pageImg')
  canvas.appendChild(elem)

  addImageToCanvas(canvas, elem)
}

const addImageToCanvas = (canvas, image) => {
  var ctx = canvas.getContext('2d')

  canvas.width = image.width
  canvas.height = image.height

  ctx.drawImage(image, 0, 0)
}
