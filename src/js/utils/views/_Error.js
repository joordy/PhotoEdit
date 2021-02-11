import { docTitle } from '../components/index'
export const errorView = (body, router) => {
  return async () => {
    // Change doc title
    let title = docTitle('404 Page Not Found | Unsplash Library — Jorrr')

    // Add 404 message
    let content = document.getElementById('app')
    let element = document.createElement('header')
    let textnode = document.createTextNode(`404`)
    element.appendChild(textnode)
    content.appendChild(element)
  }
}
