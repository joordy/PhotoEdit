import { loadButton, loadInput, fetchQuery } from '../data/index'
import { addHeader, addMain, addImages } from '../components/index'

export const homeView = (content, router) => {
  return async () => {
    // Adding Header
    content.setAttribute('class', 'homePage')
    addHeader(content)
    addMain()

    let data = await fetchQuery()

    // Event listener for search button
    let button = document.querySelector('#searchPhotos')
    button.addEventListener(
      'click',
      (data) => {
        loadButton(data, content).then((data = data))
      },
      false
    )

    // Event listener for enter key
    let input = document.querySelector('#searchElement')
    input.addEventListener(
      'keyup',
      (data) => {
        loadInput(data, content).then((data = data))
      },
      false
    )

    // Add images to main
    addImages(data)

    // Soon to come, more html elements
  }
}
