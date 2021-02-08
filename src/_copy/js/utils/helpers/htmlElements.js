export let searchButton = document.querySelector('#searchPhotos')
export let searchBar = document.querySelector('#searchElement')
export let writtenQuery = document.querySelector('#searchElement').value

let clicked = false

export function setVariable(newValue) {
  clicked = newValue
}

export function getVariable() {
  return clicked
}

export default clicked
