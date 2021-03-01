import { Router } from './utils/routes/router'
import { LocalStorageSetup } from './utils/data/index'

const init = () => {
  LocalStorageSetup()
  Router()
}

init()
