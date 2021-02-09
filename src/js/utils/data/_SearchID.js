import { getMyData } from '../helpers/index'
import { accessKey } from '../config/config'

export const checkID = async (endpoint) => {
  let res = await getMyData(
    `https://api.unsplash.com/photos/${endpoint}?client_id=${accessKey}`
  )
  return res
}
