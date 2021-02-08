// Render searched query on page
export const getQuery = (writtenQuery) => {
  let searchQuery = document.querySelector('#searchQuery')
  searchQuery.innerHTML = `Zoekterm: ${writtenQuery}`
  console.log(`Searched with the Query: ${writtenQuery}`)
}

// Render first image on page
export const getImages = (data) => {
  let content = document.getElementById('dataWrapper')

  data.forEach((item) => {
    let element = document.createElement('img')
    element.setAttribute('id', 'searchedImage')
    element.src = item.urls.regular
    content.appendChild(element)
  })
}

export const deleteResults = () => {
  const elements = document.getElementById('dataWrapper')
  if (elements.hasChildNodes()) {
    let allElements = Array.from(elements.childNodes)
    elements.removeChild(elements.childNodes[0])
    allElements.forEach((item) => {
      item.remove()
    })
  }
}
