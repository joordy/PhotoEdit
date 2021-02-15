import html2canvas from 'html2canvas'
// import { saveAs } from 'file-saver'
import { createFilter, createCanvas } from '../components/index'
import {
  addLink,
  button,
  docTitle,
  headingOne,
  headingTwo,
  img,
} from '../components/elements/index'
import { uniqueFilter } from '../helpers/index'

export const detailedView = (content, router) => {
  return async () => {
    // Get Image details from clicked link
    const props = await uniqueFilter()

    // Change doc title
    let title = docTitle('Editor | Unsplash Library — Jorrr')

    // Add Class to specific page, for styling unique content
    content.setAttribute('class', 'detailPage')
    content.setAttribute('id', 'capture')

    // Add Button to home
    const homeButton = addLink('/', 'Back')
    content.appendChild(homeButton)

    const pageTitle = insertHeader(content, props)

    // Add Heading two
    const h2 = headingTwo(props.alt_description)
    content.appendChild(h2)

    // Add Image elements
    // let insertedImg = img(props.urls.regular, 'pageImg')
    // content.appendChild(insertedImg)
    // Add Canvas elements
    const img = createCanvas(content, props)

    // Add all image filters
    const filter = createFilter(content)
    const canVas = document.querySelector('.imageCanvas')
    // let imgToEdit = document.querySelector('.pageImg')
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
        // imgToEdit.style.filter = computedFilters
        canVas.style.filter = computedFilters
      })
    })

    const saveButton = button('Save')
    content.appendChild(saveButton)

    const bttn = document.querySelector('#saveImg')

    bttn.addEventListener('click', function () {
      console.log('screenshot')
      // const myCanvas = document.querySelector('.imageCanvas')
      // myCanvas.toBlob(function (blob) {
      //   saveAs(blob, 'pretty image.png')
      // })
      html2canvas(document.querySelector('.imageCanvas')).then((canvas) => {
        console.log(canvas)
        document.body.appendChild(canvas)
      })
    })
  }
}

const insertHeader = (content, props) => {
  if (!props.description) {
    // Add Heading one of undefined
    let h1 = headingOne('Title undefined')
    content.appendChild(h1)
  } else {
    // Add Heading one
    let h1 = headingOne(props.description)
    content.appendChild(h1)
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
