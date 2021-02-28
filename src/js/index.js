import { Router } from './utils/routes/router'
import { LocalStorageSetup } from './utils/data/index'

const init = () => {
  // let images = []
  // localStorage.setItem('value', JSON.stringify(images))

  LocalStorageSetup()
  Router()
}

init()
