import { img } from './elements/index'

export const createImage = (content, props) => {
  const div = document.createElement('div')
  const elem = img(props.urls.regular, 'pageImg')

  elem.crossOrigin = 'Anonymous'

  content.appendChild(div)
  div.appendChild(elem)
}
