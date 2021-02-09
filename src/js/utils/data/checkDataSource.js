import { getMyData, getVariable } from '../helpers/index'
import { accessKey, globalUrl, searchUrl } from '../config/config'

export const checkDataSource = async (query) => {
  let data

  if (query === '' && getVariable() == true) {
    data = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    return await data
  } else if (getVariable() == true) {
    console.log(
      `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    )

    data = await getMyData(
      `${searchUrl}${accessKey}&query=${query}&per_page=33&order_by=popular`
    )
    return await data.results
  } else if (getVariable() == false) {
    data = await getMyData(
      `${globalUrl}${accessKey}&per_page=33&order_by=popular`
    )
    return await data
  }
}
