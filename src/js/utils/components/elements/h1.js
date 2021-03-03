export const HeadingOne = (item) => {
  const elem = document.createElement('h1')
  const textnode = document.createTextNode(item)

  elem.appendChild(textnode)

  return elem
}
