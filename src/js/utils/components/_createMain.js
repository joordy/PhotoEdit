export const createMain = () => {
  // Create Main
  const content = document.getElementById('app')
  const element = document.createElement('main')

  element.setAttribute('id', 'imageWrapper')
  content.appendChild(element)
}
