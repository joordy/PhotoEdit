import 'regenerator-runtime/runtime'
import { accessKey, globalUrl, searchUrl } from './utils/config/config'
import { getMyData } from './utils/helpers/fetcher'
import {
  renderSearch,
  renderImages,
  removeOldResults,
} from './utils/helpers/render'

let clicked = false
let searchButton = document.querySelector('#searchPhotos')
let searchBar = document.querySelector('#searchElement')

// Fetch data, if when query is available, else when undefined
const checkDataSource = async (globalUrl, searchUrl, clicked) => {
  if (clicked == true) {
    let writtenQuery = document.getElementById('searchElement').value
    const data = await getMyData(
      `${searchUrl}${accessKey}&query=${writtenQuery}`
    )
    let renderQuery = renderSearch(writtenQuery)
    let renderData = renderImages(data.results)
    // let removeResults = removeOldResults()
  } else if (clicked == false) {
    const data = await getMyData(`${globalUrl}${accessKey}`)
    console.log(data)
    let renderData = renderImages(data)
  }
}

// Event listener for search button
searchButton.addEventListener('click', function () {
  clicked = true
  console.log(clicked)
  checkDataSource(globalUrl, searchUrl, clicked)
})

// Event listener for enter key
searchBar.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    clicked = true
    console.log(clicked)
    checkDataSource(globalUrl, searchUrl, clicked)
  }
})

// Initial function fire
const init = checkDataSource(globalUrl, searchUrl, clicked)
