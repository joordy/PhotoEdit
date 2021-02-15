import { checkID } from '../data/index'

export const uniqueFilter = async () => {
  let url = window.location.href
  url = url.replace(`${window.location.origin}/image/`, '')
  const image = await checkID(url)
  // console.log(url)
  // console.log(`${window.location.origin}/image/`)
  // console.log(url)

  return image
}

export const filterItems = (data) => {
  return data
}
