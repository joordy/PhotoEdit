import { checkID } from '../data/index'

export const uniqueFilter = async () => {
  // let url = window.location.pathname
  // url = url.replace('/image/', '')
  let url = window.location.href
  console.log(url)
  console.log(`${window.location.origin}/image/`)
  url = url.replace(`${window.location.origin}/image/`, '')

  console.log(url)
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
