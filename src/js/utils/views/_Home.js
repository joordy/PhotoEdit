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

    // Fetch image data for events
    const props = await fetchQuery()

    // Creating HTML elements
    const header = createSearchHeader()
    const main = Main()
    const footer = createFooter()

    main.setAttribute('id', 'imageWrapper')

    // Appending elements to the body
    body.prepend(header)
    header.after(main)
    main.after(footer)

    // Event listeners for search button and enter key
    const button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (props) => {
        userInput(props, body).then((props = props))
      },
      false
    )

    // Event listeners for search button and enter key
    const input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (props) => {
        userInput(props, body).then((props = props))
      },
      false
    )
    // Append image to main section
    createImg(props)
  }
}
