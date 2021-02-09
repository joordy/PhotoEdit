import { getMyData, getVariable, filterItems } from '../helpers/index'
import { accessKey, globalUrl, searchUrl } from '../config/config'

export const fetchQuery = async (query) => {
  let res

  if (query === '' && getVariable() == true) {
    res = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    let data = filterItems(res)
    return await data
  } else if (getVariable() == true) {
    res = await getMyData(
      `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    )
    let data = filterItems(res.results)
    return await data
  } else if (getVariable() == false) {
    res = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    let data = filterItems(res)
    return await data
  }
}
