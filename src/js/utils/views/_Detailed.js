import { docTitle, addFilter } from '../components/index'
import { headingOne, headingTwo, img } from '../components/elements/index'
import { uniqueFilter } from '../helpers/index'

export const detailedView = (content, router) => {
  return async () => {
    let title = docTitle('Editor | Unsplash Library — Jorrr')
    content.setAttribute('class', 'detailPage')
    let props = await uniqueFilter()
    console.log(props)

    // H1
    let h1 = headingOne(props.description)
    content.appendChild(h1)

    // H2
    let h2 = headingTwo(props.alt_description)
    content.appendChild(h2)

    // Image
    let elem = img(props.urls.regular, 'pageImg')
    content.appendChild(elem)

    let filter = addFilter(content)

    let imageToEdit = document.querySelector('.pageImg')
    let applyControls = document.querySelectorAll('input[type=range]')
    let applyFilters = document.querySelectorAll('#applyFilter')

    console.log(applyControls)
    console.log(applyFilters)

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
