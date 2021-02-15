import { docTitle } from '../components/elements/index'
export const profileView = (body, router) => {
  return async () => {
    // Change doc title
    const title = docTitle('User Profile | Unsplash Library — Jorrr')

    // Add 404 message
    const content = document.getElementById('app')
    const element = document.createElement('header')
    const textnode = document.createTextNode(`profile`)

    element.appendChild(textnode)
    content.appendChild(element)
  }
}
