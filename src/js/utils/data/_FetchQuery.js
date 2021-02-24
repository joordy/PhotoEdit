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
    let apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filteredData = filterItems(response)
    return await filteredData
  } else if (getVariable() == true) {
    let apiUrl = `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filter = filterItems(response.results)
    let sortedData = sortItems(filter)
    // let writtenQuery = getQuery(query)
    searchQuery(query)
    // console.log(writtenQuery)
    // console.log(sort)
    return await sortedData
  } else if (getVariable() == false) {
    let apiUrl = `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    response = await getMyData(apiUrl)
    let filteredData = filterItems(response)
    return await filteredData
  }
}
