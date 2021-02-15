import { inputSlider, Label } from './elements/index'
import { filterElements } from '../helpers/_Others'

export const createFilter = (content) => {
  const section = document.createElement('section')

  filterElements.forEach((item) => {
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    const summaryText = document.createTextNode(item.filter)
    const div = document.createElement('div')
    const label = Label(item.filter)
    const inputRange = inputSlider(Object.values(item))

    section.appendChild(details)
    details.appendChild(summary)
    summary.appendChild(summaryText)
    details.appendChild(div)
    div.appendChild(inputRange)
  })

  const firstEl = Array.from(section.childNodes)
  firstEl[0].setAttribute('open', 'true')

  const elements = Array.from(section.childNodes)

  elements.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all the details that are not targetDetail.
      elements.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })

  return section
}
