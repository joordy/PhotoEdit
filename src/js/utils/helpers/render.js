// Render searched query on page
export const renderSearch = (writtenQuery) => {
  let searchQuery = document.querySelector('#searchQuery')
  searchQuery.innerHTML = `Zoekterm: ${writtenQuery}`
  console.log(`Searched with the Query: ${writtenQuery}`)
}

// Render first image on page
export const renderImages = (data) => {
  let content = document.getElementById('dataWrapper')
  let element = document.createElement('img')

  data.forEach((item) => {
    element.setAttribute('id', 'searchedImage')
    element.src = item.urls.regular
    content.appendChild(element)
  })
}

// export const removeOldResults = () => {
//   const elements = document.getElementById('searchedImage')
//   elements.remove()
// }
