import { docTitle } from '../components/elements/index'

export const errorView = (body, router) => {
  return async () => {
    // Change doc title
    const title = docTitle('404 Page Not Found | Unsplash Library — Jorrr')

    // Add 404 message
    const content = document.getElementById('app')
    const element = document.createElement('header')
    const textnode = document.createTextNode(`404`)

    element.appendChild(textnode)
    content.appendChild(element)
  }
}
