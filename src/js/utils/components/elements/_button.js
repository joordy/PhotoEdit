export const button = (item) => {
  let element = document.createElement('button')
  let textnode = document.createTextNode(item)
  element.id = 'saveImg'

  element.appendChild(textnode)
  return element
}
