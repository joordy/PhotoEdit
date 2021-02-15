import {
  Article,
  Div,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Text,
} from './elements/index'

export const createInfo = (props) => {
  const div = Div()
  const article = Article()

  const h1 = HeadingOne(props.description)
  const h2 = HeadingTwo(props.alt_description)
  const p = Text(props.user.name)

  div.setAttribute('id', 'imgInfo')
  div.appendChild(article)

  article.appendChild(h1)
  article.appendChild(h2)
  article.appendChild(p)
  article.setAttribute('id', 'imageInfo')

  return div
}
