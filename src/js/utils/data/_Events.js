import { fetchQuery } from '../data/index'
import { addImages } from '../components/index'
import { setVariable, deleteResults } from '../helpers/index'

export const loadButton = async (data) => {
  let query = document.querySelector('#searchElement').value
  setVariable(true)
  data = await fetchQuery(query)
  deleteResults()
  addImages(data)
  return data
}

export const loadInput = async (data) => {
  if (event.keyCode === 13) {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await fetchQuery(query)
    deleteResults()
    addImages(data)
    return data
  }
  return data
}
