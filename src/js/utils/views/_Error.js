export const errorView = (body, router) => {
  return async () => {
    let content = document.getElementById('app')
    let element = document.createElement('header')
    let textnode = document.createTextNode(`404`)
    element.appendChild(textnode)
    content.appendChild(element)
  }
}
