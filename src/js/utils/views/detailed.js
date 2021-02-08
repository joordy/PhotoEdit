export const detailedView = (body, router) => {
  return async () => {
    let content = document.getElementById('app')
    let element = document.createElement('h1')
    let textnode = document.createTextNode(`ABC`)
    element.appendChild(textnode)
    content.appendChild(element)
  }
}
