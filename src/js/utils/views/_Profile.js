import {
  Article,
  docTitle,
  Div,
  Href,
  Header,
  HeadingOne,
  HeadingTwo,
  Image,
  Main,
  Text,
} from '../components/elements/index'
export const profileView = (body) => {
  return async () => {
    body.setAttribute('class', 'profilePage')

    // Change doc title
    const title = docTitle('User Profile | PhotoPaint — Jorrr')

    // Place data (localStorage) in prop element
    const props = JSON.parse(localStorage.getItem('images'))

    const placeholder =
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    const header = Header('profileheader')
    const homeButton = Href('/', 'back')
    const main = Main('profile')
    const personArticle = Article()
    const imgArticle = Article()
    const h1 = HeadingOne('John Doe')
    const img = Image(placeholder, 'profilePic')
    const insta = Href('https://www.instagram.com', 'i')
    const facebook = Href('https://www.instagram.com', 'b')
    const dribbble = Href('https://www.instagram.com', 'c')
    const h2 = HeadingTwo('Saved collection')
    const div = Div()
    const text = Text('No saved images yet')

    body.appendChild(header)
    body.appendChild(main)

    header.appendChild(homeButton)

    main.appendChild(personArticle)
    main.appendChild(imgArticle)

    personArticle.appendChild(img)
    personArticle.appendChild(h1)
    personArticle.appendChild(insta)
    personArticle.appendChild(facebook)
    personArticle.appendChild(dribbble)

    imgArticle.appendChild(h2)
    imgArticle.appendChild(div)

    if (props === null) {
      console.log(true)
      div.appendChild(text)
    } else {
      props.forEach((item) => {
        const img = Image(item.image.urls.regular, 'savedImage')
        div.appendChild(img)
      })
    }
  }
}
