import { eventButton, userInput, fetchQuery } from '../data/index'
import {
  createSearchHeader,
  createImg,
  createFooter,
} from '../components/index'
import { Main } from '../components/elements/_main'

export const homeView = (content, router) => {
  return async () => {
    const header = createSearchHeader(content)
    const mainEl = Main('imageWrapper')

    // Adding Header and main element
    content.setAttribute('class', 'homePage')
    content.appendChild(mainEl)

    // Fetch image data for events
    const data = await fetchQuery()

    // Event listeners for search button and enter key
    const button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (data) => {
        userInput(data, content).then((data = data))
      },
      false
    )
    const input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (data) => {
        userInput(data, content).then((data = data))
      },
      false
    )

    // Add images to main section and footer to the page
    createImg(data)
    createFooter(content)
  }
}
