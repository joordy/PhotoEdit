import { article, inputSlider, label } from './elements/index'

export const addFilter = (content) => {
  // let filterOne = article()
  // let labelEl = label('Blur ')
  // let greyScale = inputSlider(Object.values(elements[0]))

  // content.appendChild(filterOne)
  // filterOne.appendChild(labelEl)
  // filterOne.appendChild(greyScale)
  // console.log(Object.values(elements[0]))

  elements.forEach((item) => {
    // console.log(item)
    let filterOne = article()
    let labelEl = label(item.filter)
    let greyScale = inputSlider(Object.values(item))

    content.appendChild(filterOne)
    filterOne.appendChild(labelEl)
    filterOne.appendChild(greyScale)
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
