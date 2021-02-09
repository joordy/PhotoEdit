import { img } from './elements/index'

export const addImages = (data) => {
  console.log(data)
  let element = document.querySelector('#imageWrapper')

  // Add A tag, with images.
  data.forEach((item) => {
    // console.log(item)
    let tag = document.createElement('a')
    tag.href = `/image/${item.id}`
    tag.id = `href`
    tag.rel = 'prefetch'

    let image = img(item.urls.regular, 'searchedImage')
    tag.appendChild(image)
    element.appendChild(tag)
  })
}
