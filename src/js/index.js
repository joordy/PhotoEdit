import 'regenerator-runtime/runtime'
import { getMyData } from './utils/helpers/getMyData'
import { globalUrl, searchUrl } from './utils/helpers/endpoints'
import { accessKey } from './utils/config/config'

let clicked = false
let searchButton = document.querySelector('#searchPhotos')
let searchBar = document.querySelector('#searchElement')

searchButton.addEventListener('click', function () {
  clicked = true
  console.log(clicked)
  checkDataSource(globalUrl, searchUrl, clicked)
})

searchBar.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    clicked = true
    console.log(clicked)
    checkDataSource(globalUrl, searchUrl, clicked)
  }
})

const checkDataSource = async (globalUrl, searchUrl, clicked) => {
  if (clicked == true) {
    let writtenQuery = document.getElementById('searchElement').value
    const data = await getMyData(
      `${searchUrl}${accessKey}&query=${writtenQuery}`
    )
    console.log(data, data.total, data.total_pages)
    let renderPage = renderHTML(writtenQuery)
  } else if (clicked == false) {
    const data = await getMyData(`${globalUrl}${accessKey}`)
    console.log(data)
  }
}

const work = checkDataSource(globalUrl, searchUrl, clicked)

const renderHTML = (writtenQuery) => {
  let searchQuery = document.querySelector('#searchQuery')
  searchQuery.innerHTML = `Zoekterm: ${writtenQuery}`
  console.log(`Searched with the Query: ${writtenQuery}`)
}
