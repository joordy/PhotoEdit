import html2canvas from 'html2canvas'
// import { saveAs } from 'file-saver'
import { createFilter, createCanvas } from '../components/index'
import {
  Href,
  Button,
  docTitle,
  HeadingOne,
  HeadingTwo,
  Header,
  Main,
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

    // Add Insert HTML Elements
    const header = Header('detailHeader')
    const main = Main('detailMain')
    const homeButton = Href('/', 'Back')
    const h1 = insertHeader(props)
    const h2 = HeadingTwo(props.alt_description)
    const imgCanvas = await createCanvas(props)
    const filters = createFilter(content)
    const saveButton = Button('Save')

    // Append elements to the body element
    content.appendChild(header)
    content.appendChild(main)
    header.appendChild(homeButton)
    header.appendChild(h1)
    header.appendChild(h2)
    header.appendChild(saveButton)

    main.appendChild(imgCanvas)
    main.appendChild(filters)

    // Add all image filters
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

const insertHeader = (props) => {
  if (!props.description) {
    let h1 = HeadingOne('Unknown Title')
    return h1
  } else {
    let h1 = HeadingOne(props.description)
    return h1
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
