export const HeadingTwo = (item) => {
  const elem = document.createElement('h2')
  const textnode = document.createTextNode(item)

  elem.appendChild(textnode)

  return elem
}
