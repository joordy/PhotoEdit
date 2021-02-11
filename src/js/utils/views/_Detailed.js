import { docTitle, addFilter, drawCanvas } from '../components/index'
import { headingOne, headingTwo } from '../components/elements/index'
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
    let imageToEdit = document.querySelector('.canvasTest')
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
        imageToEdit.style.filter = computedFilters
      })
    })
  }
}
