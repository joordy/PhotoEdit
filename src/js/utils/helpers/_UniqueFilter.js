import { checkID } from '../data/index'

export const uniqueFilter = async () => {
  let url = window.location.pathname
  url = url.replace('/image/', '')
  let image = await checkID(url)
  return image
}
