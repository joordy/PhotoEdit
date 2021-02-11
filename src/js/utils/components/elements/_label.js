export const label = (labelText) => {
  let label = document.createElement('label')
  let textNode = document.createTextNode(labelText)

  label.appendChild(textNode)
  label.innerHTML.charAt(0).toUpperCase()
  return label
}
