import Navigo from 'navigo'
import { detailedView, homeView, profileView, errorView } from '../views/index'

const router = new Navigo('/', false)

export const Router = () => {
  const body = document.getElementById('app')

  try {
    router
      .on({
        '/': homeView(body),
        '/image/:id': detailedView(body),
        '/profile': profileView(body),
        '/error': errorView(body),
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
