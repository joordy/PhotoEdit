export const addCanvas = (canvClass) => {
  let element = document.createElement('canvas')
  element.setAttribute('class', canvClass)

  // // element.src = item
  // return element

  return element
}

// let image = document.createElement('img')
// image.setAttribute('class', imgClass)
// image.src = source

// drawCanvas(element, image)

// const drawCanvas = (element, image) => {
//   var ctx = element.getContext('2d')

//   element.width = image.width
//   element.height = image.height

//   ctx.drawImage(image, 0, 0)
// }
// // export const img = (item, className) => {
// //   let element = document.createElement('img')
// //   element.setAttribute('class', className)
// //   element.src = item
// //   return element
// // }
