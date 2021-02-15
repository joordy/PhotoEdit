// import { button } from './elements/index'

// export const saveElement = (content) => {
//   let saveButton = button('Save')
//   content.appendChild(saveButton)

//   // let button = document.getElementById('saveImg')
//   // console.log(button)
//   // // let element = document.createElement('a')
//   // // let textnode = document.createTextNode(item)
//   // // element.href = link
//   // // element.rel = 'prefetch'
//   // // element.appendChild(textnode)
//   // // return element
//   console.log('hi')
// }

import { Article, Button, Div } from './elements/index'

export const createSave = (props) => {
  const div = Div()
  const article = Article()
  const download = Button('Download image', 'downloadImg')
  const save = Button('Save to profile', 'saveImg')

  div.setAttribute('id', 'fileInfo')
  div.appendChild(article)
  article.appendChild(download)
  article.appendChild(save)
  article.setAttribute('id', 'saveInfo')

  return div
}
