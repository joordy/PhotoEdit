export const HeadingThree = (item) => {
  let element = document.createElement('h3')
  let textnode = document.createTextNode(item)
  element.appendChild(textnode)
  return element
}
