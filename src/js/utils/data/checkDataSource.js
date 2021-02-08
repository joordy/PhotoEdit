import { accessKey, globalUrl, searchUrl } from '../config/config'
import { getVariable } from '../helpers/htmlElements'
import { getMyData } from '../helpers/fetcher'
import { getImages, getQuery, deleteResults } from '../helpers/render'

export const checkDataSource = async (query) => {
  console.log('hallo')
  if (query === '' && getVariable() == true) {
    const data = await getMyData(`${globalUrl}${accessKey}&per_page=33`)
    console.log(data)
    let renderData = getImages(data)
  } else if (getVariable() == true) {
    const data = await getMyData(
      `${searchUrl}${accessKey}&query=${query}&per_page=33`
    )
    console.log(query, data.results)

    let removeItems = deleteResults()
    let renderQuery = getQuery(query)
    let renderData = getImages(data.results)
  } else if (getVariable() == false) {
    const data = await getMyData(`${globalUrl}${accessKey}&per_page=33`)
    console.log(query, data)
    let renderData = getImages(data)
  }
}
