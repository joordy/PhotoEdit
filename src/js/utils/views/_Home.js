import { eventButton, userInput, fetchQuery } from '../data/index'
import {
  createSearchHeader,
  createImg,
  createFooter,
} from '../components/index'
import { Main } from '../components/elements/_main'

export const homeView = (body) => {
  return async () => {
    const header = createSearchHeader(body)
    const main = Main('imageWrapper')
    const footer = createFooter()

    // Adding Header and main element
    body.setAttribute('class', 'homePage')
    body.appendChild(main)
    body.appendChild(footer)

    // Fetch image data for events
    const data = await fetchQuery()

    // Event listeners for search button and enter key
    const button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (data) => {
        userInput(data, body).then((data = data))
      },
      false
    )
    const input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (data) => {
        userInput(data, body).then((data = data))
      },
      false
    )

    // Add images to main section and footer to the page
    createImg(data)
  }
}
