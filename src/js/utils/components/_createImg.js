import { Href, Image, Main } from './elements/index'

export const createImg = (data) => {
  const elem = document.querySelector('#imageWrapper')

  data.forEach((item) => {
    const href = Href(`/image/${item.id}`, '')
    href.setAttribute('data-navigo', '')
    href.setAttribute('id', 'href')
    href.setAttribute('rel', 'prefetch')

    const image = Image(item.urls.regular, 'searchedImage')

    href.appendChild(image)
    elem.appendChild(href)
  })

  return elem
}
