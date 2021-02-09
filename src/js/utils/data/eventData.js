import { checkDataSource } from '../data/checkDataSource'
import { addImages } from '../components/index'
import { setVariable, deleteResults } from '../helpers/index'

export const loadEdit = async (data) => {
  let query = document.querySelector('#searchElement').value
  setVariable(true)
  data = await checkDataSource(query)
  deleteResults()
  addImages(data)
  return data
}

export const loadEditTwo = async (data) => {
  if (event.keyCode === 13) {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await checkDataSource(query)
    deleteResults()
    addImages(data)
    return data
  }
  return data
}
