import { img } from './elements/index'

export const drawImage = (content, props) => {
  console.log(content)
  console.log(props)

  const div = document.createElement('div')
  // div.setAttribute('id', 'capture')
  content.appendChild(div)

  const elem = img(props.urls.regular, 'pageImg')
  elem.crossOrigin = 'Anonymous'

  div.appendChild(elem)
}
