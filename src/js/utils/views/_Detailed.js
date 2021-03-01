// import html2canvas from 'html2canvas'
import { uniqueFilter } from '../helpers/index'
import {
  Href,
  Article,
  docTitle,
  Header,
  Main,
} from '../components/elements/index'
import {
  createFilter,
  createSave,
  createCanvas,
  createInfo,
} from '../components/index'

export const detailedView = (body) => {
  return async () => {
    // Add Class to specific page, for styling unique content
    body.setAttribute('class', 'detailPage')
    // Get Image details from clicked link
    const props = await uniqueFilter()

    // Change doc title
    const pageTitle = docTitle('Editor | PhotoPaint — Jor')

    // Creating HTML elements
    const header = Header('detailHeader')
    const article = Article()
    const main = Main('detailMain')
    const homeButton = Href('/', 'Back')
    const imgCanvas = await createCanvas(props)
    const filters = createFilter(body)
    const info = createInfo(props)
    const save = createSave(props)

    // Appending elements to the body, header and main, using prepend & after for semantical html
    body.prepend(header)
    header.after(main)

    header.appendChild(homeButton)
    header.appendChild(article)
    article.appendChild(info)
    article.appendChild(save)

    main.appendChild(imgCanvas)
    main.appendChild(filters)

    // Select canvas from HTML, and apply filters to the canvas section.
    let CanVas = document.querySelector('canvas')
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
