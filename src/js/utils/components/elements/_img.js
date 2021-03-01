export const Image = (item, className) => {
  const elem = document.createElement('img')

  elem.setAttribute('class', className)
  elem.setAttribute('src', item)

  return elem
}
