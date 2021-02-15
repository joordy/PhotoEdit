import { Article, Header, HeadingOne } from './elements/index'

export const createSearchHeader = (body) => {
  const header = Header('searchHeader')
  const h1 = HeadingOne('Discover')
  const article = Article()
  const input = document.createElement('input')
  const button = document.createElement('button')
  const searchQuery = document.createElement('p')

  input.setAttribute('type', 'text')
  input.setAttribute('id', 'searchElement')
  input.setAttribute('placeholder', `Search free photo's`)
  button.setAttribute('id', 'searchPhotos')
  searchQuery.setAttribute('id', 'searchQuery')

  body.appendChild(header)
  header.appendChild(h1)
  header.appendChild(article)
  article.appendChild(searchQuery)
  article.appendChild(input)
  article.appendChild(button)
}
