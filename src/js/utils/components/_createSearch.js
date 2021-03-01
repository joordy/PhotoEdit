import {
  Article,
  Button,
  Header,
  HeadingOne,
  Input,
  Text,
} from './elements/index'

export const createSearchHeader = () => {
  // Create all HTML elements for searchbar
  const header = Header('searchHeader')
  const h1 = HeadingOne('Discover')
  const article = Article()
  const button = Button('', 'searchPhotos')
  const input = Input('text', 'searchElement', `Search free photo's`)
  const text = Text('')

  // Set attributes needed for other JS files
  text.setAttribute('class', 'searchQuery')

  // Appending elements inside HTML
  header.appendChild(h1)
  header.appendChild(article)
  header.appendChild(text)

  article.appendChild(input)
  article.appendChild(button)

  return header
}
