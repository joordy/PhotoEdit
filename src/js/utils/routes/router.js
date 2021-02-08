import Navigo from 'navigo'
import { homeView } from '../views/home'
import { detailedView } from '../views/detailed'
import { errorView } from '../views/error'

const router = new Navigo('/', false)

export const Router = () => {
  const body = document.querySelector('#app')

  try {
    router
      .on({
        '/': homeView(body, router),
        '/about': detailedView(body, router),
        '/error': errorView(body, router),
      })
      .notFound(() => {
        console.error('404...')
        router.navigate('/error')
      })
      .resolve()
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
