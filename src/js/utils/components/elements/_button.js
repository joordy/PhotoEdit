export const Button = (item, ID) => {
  let element = document.createElement('button')
  let textnode = document.createTextNode(item)
  element.id = ID

  element.appendChild(textnode)
  return element
}
