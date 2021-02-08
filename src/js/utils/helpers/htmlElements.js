export let searchButton = document.querySelector('#searchPhotos')
export let searchBar = document.querySelector('#searchElement')
// export let writtenQuery = document.querySelector('#searchElement').value

let clicked = false

export function setVariable(newValue) {
  clicked = newValue
  console.log(clicked)
}

export function getVariable() {
  console.log(clicked)

  return clicked
}

export default clicked
