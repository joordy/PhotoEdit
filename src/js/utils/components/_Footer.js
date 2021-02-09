export const addFooter = (content) => {
  // let element = document.createElement('header')

  // // Heading One
  // let headingOne = document.createElement('h1')
  // let headingText = document.createTextNode('Discover')
  // content.appendChild(element)
  // element.appendChild(headingOne)
  // headingOne.appendChild(headingText)

  // // Article + input and button
  // let article = document.createElement('article')

  // // Input
  // let input = document.createElement('input')
  // input.setAttribute('type', 'text')
  // input.setAttribute('id', 'searchElement')
  // input.setAttribute('placeholder', `Search free photo's`)

  // // Button
  // let button = document.createElement('button')
  // button.setAttribute('id', 'searchPhotos')

  // element.appendChild(article)
  // article.appendChild(input)
  // article.appendChild(button)

  // // Search query in P
  // let searchQuery = document.createElement('p')
  // searchQuery.setAttribute('id', 'searchQuery')

  // article.appendChild(searchQuery)

  return (content.innerHTML = `
    <footer>
      <div>X</div>
    </footer>
  `)
}
