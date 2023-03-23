import { Article, Button, Div } from './elements/_index'

export const createSave = (props) => {
  // Create all HTML elements for save button
  const div = Div()
  const article = Article()
  const download = Button('Download image', 'downloadImg')
  const save = Button('Save to profile', 'saveImg')

  // Set attributes needed for other JS files
  div.setAttribute('id', 'fileInfo')
  article.setAttribute('id', 'saveInfo')

  // Appending elements inside HTML
  div.appendChild(article)
  article.appendChild(download)
  article.appendChild(save)

  return div
}
