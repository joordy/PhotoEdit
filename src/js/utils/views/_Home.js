import { eventButton, eventInput, fetchQuery } from '../data/index'
import { addHeader, addMain, addImages, addFooter } from '../components/index'
import { main } from '../components/elements/_main'

export const homeView = (content, router) => {
  return async () => {
    console.log(content)
    // Adding Header
    content.setAttribute('class', 'homePage')
    let header = addHeader(content)

    let mainEl = main('imageWrapper')
    content.appendChild(mainEl)

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

    // Add images to main
    addImages(data)

    // Add Footer
    addFooter(content)
    // Soon to come, more html elements
  }
}
