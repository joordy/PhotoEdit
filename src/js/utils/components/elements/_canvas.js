export const Canvas = (canvClass) => {
  const elem = document.createElement('canvas')

  elem.setAttribute('class', canvClass)

  return elem
}
