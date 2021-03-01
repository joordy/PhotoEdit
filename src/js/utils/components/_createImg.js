import { Href, Image } from './elements/index'

export const createImg = (data) => {
  const element = document.querySelector('#imageWrapper')

  data.forEach((item) => {
    const href = Href('`/image/${item.id}`', '')
    href.setAttribute('data-navigo', '')
    href.setAttribute('id', 'href')
    href.setAttribute('rel', 'prefetch')

    const image = Image(item.urls.regular, 'searchedImage')

    href.appendChild(image)
    element.appendChild(href)
  })
}
