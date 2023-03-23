import {
  Article,
  Button,
  Header,
  HeadingOne,
  Input,
  Text,
} from './elements/_index'

export const createSearchHeader = () => {
  // Create all HTML elements for searchbar
  const header = Header('searchHeader')
  const h1 = HeadingOne('PhotoPaint')
  const article = Article()
  const button = Button('', 'searchPhotos')
  const input = Input('text', 'searchElement', `Search free photo's`)

  // Appending elements inside HTML
  header.appendChild(h1)
  header.appendChild(article)

  article.appendChild(input)
  article.appendChild(button)

  return header
}
