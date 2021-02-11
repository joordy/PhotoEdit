export const addLink = (link, item) => {
  let element = document.createElement('a')
  let textnode = document.createTextNode(item)

  element.href = link
  element.rel = 'prefetch'
  element.appendChild(textnode)

  return element
}
