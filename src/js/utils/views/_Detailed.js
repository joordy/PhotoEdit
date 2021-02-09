import { docTitle } from '../components/index'
import { headingOne, img } from '../components/elements/index'
import { uniqueFilter } from '../helpers/index'

export const detailedView = (content, router) => {
  return async () => {
    let title = docTitle('Editor | Unsplash Library — Jorrr')
    content.setAttribute('class', 'detailPage')
    let props = await uniqueFilter()
    console.log(props)

    // H1
    let element = headingOne(props.description)
    content.appendChild(element)

    // Image
    let elem = img(props.urls.regular, 'pageImg')
    content.appendChild(elem)
  }
}
