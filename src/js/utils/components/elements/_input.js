export const Input = (type, id, placeholder) => {
  const elem = document.createElement('input')

  elem.setAttribute('type', type)
  elem.setAttribute('id', id)
  elem.setAttribute('placeholder', placeholder)

  return elem
}
