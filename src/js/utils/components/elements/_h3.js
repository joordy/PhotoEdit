export const HeadingThree = (item) => {
  const elem = document.createElement('h3')
  const textnode = document.createTextNode(item)

  elem.appendChild(textnode)

  return elem
}
