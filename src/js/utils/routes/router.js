import Navigo from 'navigo'

const root = null
const router = new Navigo(root, false)

export const Router = () => {
  const main = document.querySelector('#app')

  try {
    router
      .on({
        '/': () => {
          console.log('home')
        },
        ///': getIndexPage(element, router)
        '/about': () => {
          console.log('about')
        },
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
