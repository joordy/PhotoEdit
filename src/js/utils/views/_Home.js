import { userInput, fetchQuery } from '../data/index'
import {
  createSearchHeader,
  createImg,
  createFooter,
} from '../components/index'

export const homeView = (body) => {
  return async () => {
    // Add Class to specific page, for styling unique content
    body.setAttribute('class', 'homePage')

    // Fetch image data for events
    const props = await fetchQuery()

    // Creating HTML elements
    const header = createSearchHeader(body)
    const footer = createFooter()
    const main = createImg(props)

    // Appending elements to the body
    body.appendChild(header)
    body.appendChild(main)
    body.appendChild(footer)

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
  }
}
