import { article, inputSlider, label } from './elements/index'

export const addFilter = (content) => {
  let ul = document.createElement('section')
  content.appendChild(ul)

  elements.forEach((item) => {
    // let listItem = document.createElement('li')
    let details = document.createElement('details')
    let summary = document.createElement('summary')
    let summaryText = document.createTextNode(item.filter)
    let div = document.createElement('div')

    let labelEl = label(item.filter)
    let inputRange = inputSlider(Object.values(item))

    ul.appendChild(details)
    details.appendChild(summary)
    summary.appendChild(summaryText)
    details.appendChild(div)
    // div.appendChild(labelEl)
    div.appendChild(inputRange)
  })
}

let elements = [
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'blur',
    scale: 'px',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'brightness',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'contrast',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'grayscale',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 360,
    value: 0,
    step: 1,
    filter: 'hue-rotate',
    scale: 'deg',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'invert',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 100,
    step: 1,
    filter: 'opacity',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 1,
    max: 100,
    value: 1,
    step: 1,
    filter: 'saturate',
    scale: '',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'sepia',
    scale: '%',
    id: 'applyFilter',
  },
]
