import { Router } from './utils/router/router'
import { LocalStorageSetup } from './utils/data/_index'

const init = () => {
  LocalStorageSetup()
  Router()
}

init()
