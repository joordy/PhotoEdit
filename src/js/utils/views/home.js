import { addHeader } from '../components/header'
import { addMain } from '../components/imageMain'

export const homeView = (body, router) => {
  return async () => {
    let content = document.getElementById('app')
    content.setAttribute('class', 'homePage')

    addHeader(content)
    addMain(content)
  }
}

// var render = (template, data) => {
//   return template.replace(/{{(.*?)}}/g, (match) => {
//     return data[match.split(/{{|}}/).filter(Boolean)[0]]
//   })
// }

// console.log(
//   render('Hi, my name is {{ name }}!', {
//     name: 'jordy',
//   })
// )
