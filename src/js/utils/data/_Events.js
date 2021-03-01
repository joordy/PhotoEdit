import { fetchQuery } from '../data/index'
import { createImg } from '../components/index'
import { setVariable, deleteResults } from '../helpers/index'

// Fetch search query based on keycode (enter) or click
export const userInput = async (data) => {
  if (event.keyCode === 13) {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await fetchQuery(query)
    deleteResults()
    const el = createImg(data)
    return [data, el]
  } else {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await fetchQuery(query)
    deleteResults()
    const el = createImg(data)
    return [data, el]
  }
}
