export const label = (labelText) => {
  let label = document.createElement('label')
  let textNode = document.createTextNode(labelText)

  label.appendChild(textNode)

  console.log(label.innerHTML.slice(1))
  // label.innerHTML.charAt(0).toUpperCase() + label.innerHTML.slice(1)
  label.innerHTML.charAt(0).toUpperCase()
  return label
}
