import { Router } from './utils/router/router'
import { LocalStorageSetup } from './utils/data/index'

const init = () => {
  LocalStorageSetup()
  Router()
}

init()
