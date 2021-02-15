export const Text = (item) => {
  let p = document.createElement('p')
  let textNode = document.createTextNode(item)
  p.appendChild(textNode)
  return p
}
