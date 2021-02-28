import { Article, Header, HeadingOne } from './elements/index'

export const createSearchHeader = (body) => {
  // Create all HTML elements for searchbar
  const header = Header('searchHeader')
  const h1 = HeadingOne('Discover')
  const article = Article()
  const input = document.createElement('input')
  const button = document.createElement('button')
  const text = document.createElement('p')

  // Set attributes needed for other JS files
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'searchElement')
  input.setAttribute('placeholder', `Search free photo's`)
  button.setAttribute('id', 'searchPhotos')
  text.setAttribute('id', 'searchQuery')

  // Appending elements inside HTML
  body.appendChild(header)

  header.appendChild(h1)
  header.appendChild(article)
  header.appendChild(text)

  article.appendChild(input)
  article.appendChild(button)
}
