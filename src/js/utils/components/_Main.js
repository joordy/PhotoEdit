export const addMain = () => {
  // Create Main
  let content = document.getElementById('app')
  let element = document.createElement('main')
  element.setAttribute('id', 'imageWrapper')

  content.appendChild(element)
}
