import {
  Details,
  Div,
  inputSlider,
  Label,
  Section,
  Summary,
} from './elements/index'
import { filterElements } from '../helpers/_others'

export const createFilter = (content) => {
  const section = Section()

  filterElements.forEach((item) => {
    const details = Details()
    const summary = Summary(item.filter)
    const div = Div()
    const label = Label(item.filter)
    const inputRange = inputSlider(Object.values(item))

    section.appendChild(details)
    details.appendChild(summary)
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
