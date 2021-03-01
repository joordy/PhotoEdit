export const Input = (type, id, placeholder) => {
  let element = document.createElement('input')

  element.setAttribute('type', type)
  element.setAttribute('id', id)
  element.setAttribute('placeholder', placeholder)

  // let textnode = document.createTextNode(item)
  // element.id = ID

  // element.appendChild(textnode)
  return element
}
