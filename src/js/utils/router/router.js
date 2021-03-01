import Navigo from 'navigo'
import { detailedView, homeView, profileView, errorView } from '../views/index'

export const Router = () => {
  const router = new Navigo('/', false)
  const body = document.querySelector('body')

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
