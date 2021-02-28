export const searchQuery = (writtenQuery) => {
  let textelement = document.querySelector('#searchQuery')
  textelement.innerHTML = ''

  let textText = document.createTextNode(writtenQuery)
  // let textelement = document.querySelector('#searchQuery')
  textelement.appendChild(textText)
}
