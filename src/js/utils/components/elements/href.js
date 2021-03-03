export const Href = (link, item) => {
  const elem = document.createElement('a')
  const textnode = document.createTextNode(item)

  elem.setAttribute('href', link)
  elem.setAttribute('rel', 'prefetch')
  elem.appendChild(textnode)

  return elem
}
