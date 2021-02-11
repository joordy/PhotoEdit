import {
  docTitle,
  addFilter,
  drawCanvas,
  saveElement,
} from '../components/index'
import {
  addLink,
  button,
  headingOne,
  headingTwo,
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

    // Add Button to home
    let homeButton = addLink('/', 'Back')
    content.appendChild(homeButton)
    // Add Heading one
    let h1 = headingOne(props.description)
    content.appendChild(h1)

    // Add Heading two
    let h2 = headingTwo(props.alt_description)
    content.appendChild(h2)

    // Add Canvas elements
    let canvas = drawCanvas(content, props)

    // Add all image filters
    let filter = addFilter(content)
    let canvasToEdit = document.querySelector('.imageCanvas')
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
        canvasToEdit.style.filter = computedFilters
        imgToEdit.style.filter = computedFilters
      })
    })

    let saveButton = button('Save')
    content.appendChild(saveButton)

    let bttn = document.querySelector('#saveImg')
    console.log(bttn)

    bttn.addEventListener('click', function () {
      const downloadELement = document.createElement('a')
      content.appendChild(downloadELement)
      downloadELement.href = canvasToEdit.toDataURL()
      downloadELement.download = 'downloaded_image.jpg'
      downloadELement.click()
      content.removeChild(downloadELement)
    })
  }
}
