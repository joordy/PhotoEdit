import {
  getMyData,
  getVariable,
  filterItems,
  sortItems,
  getQuery,
} from '../helpers/index'
import { searchQuery } from '../components/index'
import { accessKey, globalUrl, searchUrl } from '../config/config'

export const fetchQuery = async (query) => {
  let response

  if (query === '' && getVariable() == true) {
    // Fetch most popular images from unsplash, when pressing enter OR clicking, without query content.
    let apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filteredData = filterItems(response)
    return await filteredData
  } else if (getVariable() == true) {
    // Fetch images which are related to the search-query. The most popular images will be returned.
    let apiUrl = `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filter = filterItems(response.results)
    let sortedData = sortItems(filter)

    let textje = searchQuery(query)

    return await sortedData
  } else if (getVariable() == false) {
    // Basic fetch most popular images from unsplash as default.
    let apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filteredData = filterItems(response)
    return await filteredData
  }
}
