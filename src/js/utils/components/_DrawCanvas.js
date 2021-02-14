// import { addCanvas, img } from './elements/index'

// export const drawCanvas = async (content, props) => {
//   // Canvas
//   const canvas = addCanvas('imageCanvas')
//   content.appendChild(canvas)

//   // Image
//   const elem = img(props.urls.regular, 'pageImg')
//   elem.crossOrigin = 'Anonymous'
//   console.log(elem)

//   canvas.appendChild(elem)

//   let el = await addImageToCanvas(canvas, elem)
// }

// const addImageToCanvas = (canvas, image) => {
//   const ctx = canvas.getContext('2d')

//   canvas.width = image.width
//   canvas.height = image.height

//   ctx.drawImage(image, 0, 0)
// }
