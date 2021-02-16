import { Router } from './utils/routes/router'

const init = () => {
  let images = []
  localStorage.setItem('value', JSON.stringify(images))

  Router()
}

init()
