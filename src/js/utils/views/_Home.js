import { eventButton, eventInput, fetchQuery } from '../data/index'
import { createHeader, createImg, createFooter } from '../components/index'
import { main } from '../components/elements/_main'

export const homeView = (content, router) => {
  return async () => {
    const header = createHeader(content)
    const mainEl = main('imageWrapper')

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
        eventButton(data, content).then((data = data))
      },
      false
    )
    const input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (data) => {
        eventInput(data, content).then((data = data))
      },
      false
    )

    // Add images to main section and footer to the page
    createImg(data)
    createFooter(content)
  }
}
