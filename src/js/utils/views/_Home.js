import { eventButton, eventInput, fetchQuery } from '../data/index'
import { addHeader, addImages, addFooter } from '../components/index'
import { main } from '../components/elements/_main'

export const homeView = (content, router) => {
  return async () => {
    // Adding Header
    content.setAttribute('class', 'homePage')
    let header = addHeader(content)

    // Add main element
    let mainEl = main('imageWrapper')
    content.appendChild(mainEl)

    // Fetch image data
    let data = await fetchQuery()

    // Event listener for search button
    let button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (data) => {
        eventButton(data, content).then((data = data))
      },
      false
    )

    // Event listener for enter key
    let input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (data) => {
        eventInput(data, content).then((data = data))
      },
      false
    )

    // Add images to main section
    addImages(data)

    // Add Footer for future menu
    addFooter(content)
  }
}
