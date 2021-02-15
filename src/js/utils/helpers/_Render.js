// Render searched query on page
export const getQuery = (writtenQuery) => {
  let searchQuery = document.querySelector('#searchQuery')
  searchQuery.innerHTML = `Zoekterm: ${writtenQuery}`
  console.log(`Searched with the Query: ${writtenQuery}`)
}

// Deletes previous searched images
export const deleteResults = () => {
  const element = document.querySelector('#imageWrapper')

  console.log(element)
  if (element.hasChildNodes()) {
    let allElements = Array.from(element.childNodes)
    element.removeChild(element.childNodes[0])
    allElements.forEach((item) => {
      item.remove()
    })
  }
}
