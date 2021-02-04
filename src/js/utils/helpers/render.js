// Render searched query on page
export const renderSearch = (writtenQuery) => {
  let searchQuery = document.querySelector('#searchQuery')
  searchQuery.innerHTML = `Zoekterm: ${writtenQuery}`
  console.log(`Searched with the Query: ${writtenQuery}`)
}

// Render first image on page
export const renderImages = (data) => {
  let content = document.getElementById('dataWrapper')
  // let element = document.createElement('img')
  // element.setAttribute('id', 'searchedImage')
  // element.src = data[0].urls.thumb
  // content.appendChild(element)

  data.forEach((item) => {
    let element = document.createElement('img')
    element.setAttribute('id', 'searchedImage')
    element.src = item.urls.regular
    content.appendChild(element)
  })
}

export const removeOldResults = () => {
  const elements = document.getElementById('dataWrapper')
  if (elements.hasChildNodes()) {
    let allElements = Array.from(elements.childNodes)
    elements.removeChild(elements.childNodes[0])
    allElements.forEach((item) => {
      item.remove()
    })
  }
}
