import {
  getMyData,
  getVariable,
  filterItems,
  sortItems,
  getQuery,
} from '../helpers/index'
import { accessKey, globalUrl, searchUrl } from '../config/config'

export const fetchQuery = async (query) => {
  let response

  if (query === '' && getVariable() == true) {
    // Fetch most popular images from unsplash, when pressing enter OR clicking, without query content.
    // After getMyData, send rendered data as param to filter function
    const apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    const filteredData = filterItems(response)

    return await filteredData
  } else if (getVariable() == true) {
    // Fetch images which are related to the search-query. The most popular images will be returned.
    // After getMyData, send rendered data as param to filter, sorting, and query function
    const apiUrl = `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    const filter = filterItems(response.results)
    const sortedData = sortItems(filter)
    const searchText = getQuery(query)

    return await sortedData
  } else if (getVariable() == false) {
    // Basic fetch most popular images from unsplash as default.
    // After getMyData, send rendered data as param to filter function
    const apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    const filteredData = filterItems(response)

    return await filteredData
  }
}
