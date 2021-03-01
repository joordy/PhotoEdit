export const searchQuery = (writtenQuery) => {
  let searchText = document.querySelector('#searchQuery')
  searchText.innerHTML = ''

  let textText = document.createTextNode(writtenQuery)
  searchText.appendChild(textText)
}
