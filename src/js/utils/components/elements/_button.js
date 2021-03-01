export const Button = (item, ID) => {
  const elem = document.createElement('button')
  const textnode = document.createTextNode(item)

  elem.setAttribute('id', ID)
  elem.appendChild(textnode)

  return elem
}
