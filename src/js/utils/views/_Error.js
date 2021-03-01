import {
  docTitle,
  Header,
  HeadingOne,
  Href,
  Text,
} from '../components/elements/index'

export const errorView = (body) => {
  return async () => {
    // Change doc title
    const title = docTitle('404 Page Not Found | PhotoPaint — Jorrr')

    // Add Class to specific page, for styling unique content
    body.setAttribute('class', 'errorPage')

    // Add 404 message
    const element = Header('errorHeader')
    const h1 = HeadingOne('404')
    const text = Text('The page you requested for can not be found')
    const back = Href('/', 'Return to home')

    // Appending elements to the body, using prepend & after for semantical html
    body.prepend(element)

    element.appendChild(h1)
    element.appendChild(text)
    element.appendChild(back)
  }
}
