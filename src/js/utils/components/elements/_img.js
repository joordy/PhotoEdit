export const Image = (item, className) => {
  let element = document.createElement('img')
  element.setAttribute('class', className)
  element.src = item
  return element
}
