// import { checkDataSource } from '../data/checkDataSource'
// import { setVariable } from '../helpers/htmlElements'

export const addImages = (data) => {
  // console.log(data.length)
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

// console.log(data)

// // return data.forEach((item) => {
// // let tag = document.createElement('a')
// // tag.href = `/image/${item.id}`
// // tag.id = `href`
// // content.appendChild(tag)

// // console.log(content)

// // let content = document.getElementById('dataWrapper')

// // return data.forEach((item) => {
// //   let tag = document.createElement('a')
// //   tag.href = `/image/${item.id}`
// //   tag.id = `href`

// //   let element = document.createElement('img')
// //   element.setAttribute('id', 'searchedImage')
// //   element.src = item.urls.regular
// //   content.appendChild(tag)
// //   tag.appendChild(element)
// // })

// // let data
// // // let link = document.querySelector('#href')
// // // link.setAttribute('data-navigo', 'data-navigo')
// // let element = document.createElement('main')
// // element.setAttribute('id', 'dataWrapper')
// // content.appendChild(element)
// // let headingOne = document.createElement('h1')
// // let headingText = document.createTextNode('Discover')
// // content.appendChild(element)
// // element.appendChild(headingOne)
// // headingOne.appendChild(headingText)

// data.forEach((item) => {
//   console.log(item)
//   // let tag = document.createElement('a')
//   // tag.href = `/image/${item.id}`
// }
