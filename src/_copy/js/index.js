import 'regenerator-runtime/runtime'
import { accessKey, globalUrl, searchUrl } from './utils/config/config'
import { getMyData } from './utils/helpers/fetcher'
import { getImages, getQuery, deleteResults } from './utils/helpers/render'
import {
  clicked,
  // writtenQuery,
  searchBar,
  searchButton,
  setVariable,
  getVariable,
} from './utils/helpers/htmlElements'

const checkDataSource = async (globalUrl, searchUrl, query) => {
  if (query === '' && getVariable() == true) {
    const data = await getMyData(`${globalUrl}${accessKey}&per_page=33`)
    let renderData = getImages(data)
  } else if (getVariable() == true) {
    const data = await getMyData(
      `${searchUrl}${accessKey}&query=${query}&per_page=33`
    )
    let removeItems = deleteResults()
    let renderQuery = getQuery(query)
    let renderData = getImages(data.results)
  } else if (getVariable() == false) {
    const data = await getMyData(`${globalUrl}${accessKey}&per_page=33`)
    let renderData = getImages(data)
  }
}

// Event listener for search button
searchButton.addEventListener('click', function () {
  let query = document.querySelector('#searchElement').value
  setVariable(true)
  checkDataSource(globalUrl, searchUrl, query)
})

// Event listener for enter key
searchBar.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    checkDataSource(globalUrl, searchUrl, query)
  }
})

const init = checkDataSource(globalUrl, searchUrl, clicked)
