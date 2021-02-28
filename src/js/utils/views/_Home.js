import { userInput, fetchQuery } from '../data/index'
import {
  createSearchHeader,
  createImg,
  createFooter,
} from '../components/index'
import { Main } from '../components/elements/_main'

export const homeView = (body) => {
  return async () => {
    // Add Class to specific page, for styling unique content
    body.setAttribute('class', 'homePage')

    // Creating HTML elements
    const header = createSearchHeader(body)
    const main = Main('imageWrapper')
    const footer = createFooter()

    // Appending elements to the body
    body.appendChild(main)
    body.appendChild(footer)

    // Fetch image data for events
    const props = await fetchQuery()

    // Event listeners for search button and enter key
    const button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (props) => {
        userInput(props, body).then((props = props))
      },
      false
    )
    const input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (props) => {
        userInput(props, body).then((props = props))
      },
      false
    )

    // Add images to main section and footer to the page
    createImg(props)
  }
}
