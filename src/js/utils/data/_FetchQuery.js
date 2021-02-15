import {
  getMyData,
  getVariable,
  filterItems,
  sortItems,
} from '../helpers/index'
import { accessKey, globalUrl, searchUrl } from '../config/config'

export const fetchQuery = async (query) => {
  let res

  if (query === '' && getVariable() == true) {
    res = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    let filter = filterItems(res)
    return await filter
  } else if (getVariable() == true) {
    res = await getMyData(
      `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    )
    let filter = filterItems(res.results)
    let sort = sortItems(filter)
    console.log(sort)
    return await sort
  } else if (getVariable() == false) {
    res = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    let data = filterItems(res)
    return await data
  }
}
