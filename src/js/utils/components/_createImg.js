import { Image } from './elements/index'

export const createImg = (data) => {
  const element = document.querySelector('#imageWrapper')

  data.forEach((item) => {
    console.log(item.likes)
    const tag = document.createElement('a')
    tag.setAttribute('data-navigo', '')
    tag.href = `/image/${item.id}`
    tag.id = `href`
    tag.rel = 'prefetch'

    const image = Image(item.urls.regular, 'searchedImage')

    tag.appendChild(image)
    element.appendChild(tag)
  })
}
