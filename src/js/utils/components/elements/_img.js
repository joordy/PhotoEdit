export const img = (item, className) => {
  let element = document.createElement('img')
  element.setAttribute('id', className)
  element.src = item
  return element
}
