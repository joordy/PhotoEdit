export const addImages = (data) => {
  console.log(data)
  let element = document.querySelector('#imageWrapper')

  // Add A tag, with images.
  data.forEach((item) => {
    // console.log(item)
    let tag = document.createElement('a')
    tag.href = `/image/${item.id}`
    tag.id = `href`

    let image = document.createElement('img')
    image.setAttribute('id', 'searchedImage')
    image.src = item.urls.regular
    tag.appendChild(image)
    element.appendChild(tag)
  })
}
