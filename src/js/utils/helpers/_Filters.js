import { checkID } from '../data/index'

export const uniqueFilter = async () => {
  let url = window.location.pathname
  url = url.replace('/image/', '')
  let image = await checkID(url)
  return image
}

export const filterItems = (data) => {
  // console.log(data)
  // return data.map(item => {
  //   return {
  //     alt_description: item.alt_description,

  //   }
  // })
  return data
}
