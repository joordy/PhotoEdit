export const detailedView = (content, router) => {
  return async () => {
    content.setAttribute('class', 'detailPage')
    let element = document.createElement('h1')
    let textnode = document.createTextNode(`ABC`)
    element.appendChild(textnode)
    content.appendChild(element)
  }
}
