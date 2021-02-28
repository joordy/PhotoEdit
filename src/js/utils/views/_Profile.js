import {
  Article,
  Button,
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

    // Placeholder profile image
    const placeholder =
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'

    // Creating HTML elements
    const header = Header('profileheader')
    const homeButton = Href('/', 'back')
    const main = Main('profile')
    const personArticle = Article()
    const imgArticle = Article()
    const h1 = HeadingOne('John Doe')
    const img = Image(placeholder, 'profilePic')
    const insta = Href('https://www.instagram.com', '')
    const twitter = Href('https://www.twitter.com', '')
    const unsplash = Href('https://www.unsplash.com', '')
    const h2 = HeadingTwo('Saved collection')
    const div = Div()
    const divSocial = Div()
    const button = Button('remove', 'removeImages')
    const text = Text('No saved images yet')

    // Appending elements to the body, header and main
    body.appendChild(header)
    body.appendChild(main)

    header.appendChild(homeButton)

    main.appendChild(personArticle)
    main.appendChild(imgArticle)

    personArticle.appendChild(img)
    personArticle.appendChild(h1)
    personArticle.appendChild(divSocial)
    divSocial.appendChild(insta)
    divSocial.appendChild(twitter)
    divSocial.appendChild(unsplash)

    imgArticle.appendChild(h2)
    imgArticle.appendChild(button)
    imgArticle.appendChild(div)

    // If else statement, to display text if localStorage is empty, or append the image with styling.
    if (props === null) {
      console.log(true)
      div.appendChild(text)
      button.setAttribute('disabled', '')
    } else {
      props.forEach((item) => {
        const img = Image(item.image.urls.regular, 'savedImage')
        img.style.cssText = `filter: ${item.styles}`
        div.appendChild(img)
      })
    }

    const removeImagesBtn = document.querySelector('#removeImages')
    console.log(removeImagesBtn)

    if (!removeImagesBtn) {
      console.log('its tru  e')
      console.log(!removeImagesBtn)
    } else {
      console.log('test')
      removeImagesBtn.addEventListener('click', function () {
        console.log('click')
        localStorage.clear()
        location.reload(true)
      })
    }
  }
}
