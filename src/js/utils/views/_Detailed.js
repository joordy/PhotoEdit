import html2canvas from 'html2canvas'

import {
  docTitle,
  addFilter,
  drawCanvas,
  drawImage,
  saveElement,
} from '../components/index'
import {
  addLink,
  button,
  headingOne,
  headingTwo,
  img,
} from '../components/elements/index'
import { uniqueFilter } from '../helpers/index'

export const detailedView = (content, router) => {
  return async () => {
    // Get Image details from clicked link
    let props = await uniqueFilter()
    console.log(props)

    // Change doc title
    let title = docTitle('Editor | Unsplash Library — Jorrr')

    // Add Class to specific page, for styling unique content
    content.setAttribute('class', 'detailPage')
    content.setAttribute('id', 'capture')

    // Add Button to home
    let homeButton = addLink('/', 'Back')
    content.appendChild(homeButton)
    // Add Heading one
    let h1 = headingOne(props.description)
    content.appendChild(h1)

    // Add Heading two
    let h2 = headingTwo(props.alt_description)
    content.appendChild(h2)

    // Add Image elements
    let insertedImg = img(props.urls.regular, 'pageImg')
    content.appendChild(insertedImg)
    // Add Canvas elements
    // let img = drawImage(content, props)

    // Add all image filters
    let filter = addFilter(content)
    let imgToEdit = document.querySelector('.pageImg')
    let applyControls = document.querySelectorAll('input[type=range]')
    let applyFilters = document.querySelectorAll('#applyFilter')
    applyFilters.forEach((item) => {
      item.addEventListener('change', function () {
        let computedFilters = ''

        applyControls.forEach((elem) => {
          computedFilters +=
            elem.getAttribute('data-filter') +
            '(' +
            elem.value +
            elem.getAttribute('data-scale') +
            ') '
        })
        console.log(computedFilters)
        imgToEdit.style.filter = computedFilters
      })
    })

    let saveButton = button('Save')
    content.appendChild(saveButton)

    let bttn = document.querySelector('#saveImg')

    bttn.addEventListener('click', async function () {
      console.log('screenshot')
      html2canvas(document.querySelector('#capture')).then((canvas) => {
        console.log(canvas)
        document.body.appendChild(canvas)
      })
    })
  }
}

// html2canvas(document.querySelector('#export')).then((canvas) => {
//   console.log(canvas)
//   console.log(canvas.toDataURL('image/png'))
//   document.body.appendChild(canvas)
// })
// // Add all image filters
// let filter = addFilter(content)
// let canvasToEdit = document.querySelector('.imageCanvas')
// let imgToEdit = document.querySelector('.pageImg')
// let applyControls = document.querySelectorAll('input[type=range]')
// let applyFilters = document.querySelectorAll('#applyFilter')
// applyFilters.forEach((item) => {
//   item.addEventListener('change', function () {
//     let computedFilters = ''

//     applyControls.forEach((elem) => {
//       computedFilters +=
//         elem.getAttribute('data-filter') +
//         '(' +
//         elem.value +
//         elem.getAttribute('data-scale') +
//         ') '
//     })
//     console.log(computedFilters)
//     canvasToEdit.style.filter = computedFilters
//     imgToEdit.style.filter = computedFilters
//   })
// })

// let saveButton = button('Save')
// content.appendChild(saveButton)

// let bttn = document.querySelector('#saveImg')
// console.log(bttn)

// bttn.addEventListener('click', function () {
//   const downloadELement = document.createElement('a')
//   content.appendChild(downloadELement)
//   downloadELement.href = canvasToEdit.toDataURL()
//   downloadELement.download = 'downloaded_image.jpg'
//   downloadELement.click()
//   content.removeChild(downloadELement)
// })
