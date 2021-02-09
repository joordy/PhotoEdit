import { checkID } from '../data/index'

export const detailedView = (content, router) => {
  return async () => {
    let url = window.location.pathname
    url = url.replace('/image/', '')
    let image = await checkID(url)
    console.log(image)

    content.setAttribute('class', 'detailPage')
    let element = document.createElement('h1')
    let textnode = document.createTextNode(`ABC`)
    element.appendChild(textnode)
    content.appendChild(element)

    let elem = document.createElement('img')
    elem.setAttribute('id', 'searchedImage')
    elem.src = image.urls.regular
    content.appendChild(elem)
  }
}
