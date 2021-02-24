import { docTitle } from '../components/elements/index'

export const errorView = (body) => {
  return async () => {
    // Change doc title
    const title = docTitle('404 Page Not Found | PhotoPaint — Jorrr')

    // Add 404 message
    const element = document.createElement('header')
    const textnode = document.createTextNode(`404`)

    element.appendChild(textnode)
    body.appendChild(element)
  }
}
