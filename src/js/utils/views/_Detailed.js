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
    const pageTitle = docTitle('Editor | Unsplash Library — Jor')

    // Add Insert HTML Elements
    const header = Header('detailHeader')
    const main = Main('detailMain')
    const homeButton = Href('/', 'Back')
    const imgCanvas = await createCanvas(props)
    const filters = createFilter(body)
    const info = createInfo(props)
    const save = createSave(props)

    // Append elements to the body element
    body.appendChild(header)
    header.appendChild(homeButton)
    header.appendChild(info)
    header.appendChild(save)
    body.appendChild(main)
    main.appendChild(imgCanvas)
    main.appendChild(filters)

    // Add all image filters
    const CanVas = document.querySelector('.imageCanvas')
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
        // console.log(computedFilters)
        CanVas.style.filter = computedFilters
      })
    })

    const downloadBtn = document.querySelector('#downloadImg')
    const saveBtn = document.querySelector('#saveImg')
    const fileBtn = document.querySelector('#fileInfo')
    const imgBtn = document.querySelector('#imgInfo')

    downloadBtn.addEventListener('click', (e) => {
      const downloadElement = document.createElement('a')
      body.appendChild(downloadElement)
      downloadElement.href = CanVas.toDataURL()
      downloadElement.download = 'downloaded_image_jorDev.jpg'
      downloadElement.click()
      body.removeChild(downloadElement)
    })

    saveBtn.addEventListener('click', (e) => {
      console.log('save')
      let oldItems = JSON.parse(localStorage.getItem('images')) || []

      let newItem = props

      oldItems.push(newItem)

      localStorage.setItem('images', JSON.stringify(oldItems))
      // let data = []
      // data.push(props)
      // localStorage.setItem('savedImg', JSON.stringify(data))
    })

    fileBtn.addEventListener('click', (e) => {
      const article = document.querySelector('#saveInfo')
      article.classList.toggle('openFileElement')
    })
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
