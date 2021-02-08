export const addMain = (content) => {
  let element = document.createElement('main')
  element.setAttribute('id', 'dataWrapper')

  content.appendChild(element)
  // let headingOne = document.createElement('h1')
  // let headingText = document.createTextNode('Discover')

  // content.appendChild(element)
  // element.appendChild(headingOne)
  // headingOne.appendChild(headingText)
}
