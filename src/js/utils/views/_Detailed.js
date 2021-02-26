// import html2canvas from 'html2canvas'
import {
  Href,
  Button,
  docTitle,
  HeadingOne,
  HeadingTwo,
  Header,
  Main,
} from '../components/elements/index'
import {
  createFilter,
  createSave,
  createCanvas,
  createInfo,
} from '../components/index'
import { uniqueFilter } from '../helpers/index'

export const detailedView = (body) => {
  return async () => {
    // Add Class to specific page, for styling unique content
    body.setAttribute('class', 'detailPage')
    // Get Image details from clicked link
    const props = await uniqueFilter()
    console.log(props)
    // Change doc title
    const pageTitle = docTitle('Editor | PhotoPaint — Jor')

    // Creating HTML elements
    const header = Header('detailHeader')
    const main = Main('detailMain')
    const homeButton = Href('/', 'Back')
    const imgCanvas = await createCanvas(props)
    const filters = createFilter(body)
    const info = createInfo(props)
    const save = createSave(props)

    // Appending elements to the body, header and main
    body.appendChild(header)
    body.appendChild(main)

    header.appendChild(homeButton)
    header.appendChild(info)
    header.appendChild(save)

    main.appendChild(imgCanvas)
    main.appendChild(filters)

    // Select canvas from HTML, and apply filters to the canvas section.
    const CanVas = document.querySelector('.imageCanvas')
    let applyControls = document.querySelectorAll('input[type=range]')
    let applyFilters = document.querySelectorAll('#applyFilter')
    let computedFilters

    // When editing, applying filters to canvas
    applyFilters.forEach((item) => {
      item.addEventListener('change', function () {
        computedFilters = ''
        applyControls.forEach((elem) => {
          computedFilters +=
            elem.getAttribute('data-filter') +
            '(' +
            elem.value +
            elem.getAttribute('data-scale') +
            ') '
        })
        CanVas.style.filter = computedFilters
        return computedFilters
      })
      return computedFilters
    })

    const downloadBtn = document.querySelector('#downloadImg')
    const saveBtn = document.querySelector('#saveImg')
    const fileBtn = document.querySelector('#fileInfo')
    const imgBtn = document.querySelector('#imgInfo')

    // Download button, to download the canvas element WITHOUT styles to your local computer
    downloadBtn.addEventListener('click', (e) => {
      const downloadElement = document.createElement('a')
      body.appendChild(downloadElement)
      downloadElement.href = CanVas.toDataURL()
      downloadElement.download = 'downloaded_image_jorDev.jpg'
      downloadElement.click()
      body.removeChild(downloadElement)
    })

    // Save image element with CSS styles to localStorage
    saveBtn.addEventListener('click', (e) => {
      console.log('save')
      let oldItems = JSON.parse(localStorage.getItem('images')) || []

      let newItem = {
        image: props,
        styles: computedFilters,
      }

      oldItems.push(newItem)

      localStorage.setItem('images', JSON.stringify(oldItems))
      console.log(JSON.parse(localStorage.getItem('images')))
    })

    // Toggle button to open div with buttons.
    fileBtn.addEventListener('click', (e) => {
      const article = document.querySelector('#saveInfo')
      article.classList.toggle('openFileElement')
    })

    // Toggle button to open div with image information
    imgBtn.addEventListener('click', (e) => {
      const article = document.querySelector('#imageInfo')
      article.classList.toggle('openImgElement')
    })
  }
}

// const insertHeader = (props) => {
//   if (!props.description) {
//     let h1 = HeadingOne('Unknown Title')
//     return h1
//   } else {
//     let h1 = HeadingOne(props.description)
//     return h1
//   }
// }

// const bttn = document.querySelector('#downloadImg')

// bttn.addEventListener('click', function () {
//   const downloadElement = document.createElement('a')
//   body.appendChild(downloadElement)
//   downloadElement.href = CanVas.toDataURL()
//   downloadElement.download = 'downloaded_image_jorDev.jpg'
//   downloadElement.click()
//   body.removeChild(downloadElement)
//   // html2canvas(document.querySelector('#export')).then((canvas) => {
//   //   console.log(canvas)
//   //   console.log(canvas.toDataURL('image/png'))
//   //   document.body.appendChild(canvas)
//   // })
// })
