import { checkDataSource } from './utils/data/checkDataSource'
import { Router } from './utils/routes/router'

const init = () => {
  Router()
  checkDataSource()
}

init()
