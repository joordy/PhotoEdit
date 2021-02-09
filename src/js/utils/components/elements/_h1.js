export const headingOne = (item) => {
  let element = document.createElement('h1')
  let textnode = document.createTextNode(item)
  element.appendChild(textnode)
  return element
}
