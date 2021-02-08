import { setVariable } from '../helpers/htmlElements'
import { globalUrl, searchUrl } from '../config/config'
import { checkDataSource } from '../data/checkDataSource'

export const addHeader = (content) => {
  let element = document.createElement('header')

  // Heading One
  let headingOne = document.createElement('h1')
  let headingText = document.createTextNode('Discover')
  content.appendChild(element)
  element.appendChild(headingOne)
  headingOne.appendChild(headingText)

  // Article + input and button
  let article = document.createElement('article')

  // Input
  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'searchElement')
  input.setAttribute('placeholder', `Search free photo's`)

  // Button
  let button = document.createElement('button')
  button.setAttribute('id', 'searchPhotos')

  element.appendChild(article)
  article.appendChild(input)
  article.appendChild(button)

  // Search query in P
  let searchQuery = document.createElement('p')
  searchQuery.setAttribute('id', 'searchQuery')

  article.appendChild(searchQuery)

  // Event listener for search button
  button.addEventListener('click', function () {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    checkDataSource(query)
  })

  // Event listener for enter key
  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      let query = document.querySelector('#searchElement').value
      setVariable(true)
      checkDataSource(query)
    }
  })
}
