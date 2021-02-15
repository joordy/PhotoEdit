import { addCanvas, img } from './elements/index'

export const createCanvas = async (content, props) => {
  // Canvas
  const canvas = addCanvas('imageCanvas')
  canvas.width = props.width
  canvas.height = props.height

  content.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  const imageObj = new Image()

  imageObj.src = props.urls.full
  imageObj.crossOrigin = 'Anonymous'

  imageObj.onload = function () {
    ctx.drawImage(imageObj, 0, 0)
  }
}
