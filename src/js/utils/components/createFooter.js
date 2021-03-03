import { Footer, Href } from './elements/_index'

export const createFooter = () => {
  const footer = Footer()
  const href = Href('/profile', '')

  footer.appendChild(href)

  return footer
}
