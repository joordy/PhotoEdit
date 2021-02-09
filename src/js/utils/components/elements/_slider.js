export const inputSlider = (item) => {
  let input = document.createElement('input')
  input.type = item[0]

  input.setAttribute('min', item[1])
  input.setAttribute('max', item[2])
  input.setAttribute('value', item[3])
  input.setAttribute('step', item[4])
  input.setAttribute('data-filter', item[5])
  input.setAttribute('data-scale', item[6])
  input.setAttribute('id', item[7])

  return input
}
