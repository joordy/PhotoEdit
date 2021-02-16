import { docTitle } from '../components/elements/index'
export const profileView = (body) => {
  return async () => {
    // Change doc title
    const title = docTitle('User Profile | PhotoEdit — Jorrr')

    // Add 404 message
    const element = document.createElement('header')
    const textnode = document.createTextNode(`profile`)

    element.appendChild(textnode)
    body.appendChild(element)

    const props = JSON.parse(localStorage.getItem('images'))
    console.log(props)
  }
}
