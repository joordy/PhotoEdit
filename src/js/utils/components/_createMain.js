export const createMain = () => {
  // Create Main element
  const content = document.getElementById('app')
  const element = document.createElement('main')

  element.setAttribute('className', 'imageWrapper')
  content.appendChild(element)
}
