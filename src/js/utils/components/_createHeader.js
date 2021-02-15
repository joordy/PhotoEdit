export const createHeader = (content) => {
  const element = document.createElement('header')
  // Heading One
  const headingOne = document.createElement('h1')
  const headingText = document.createTextNode('Discover')
  content.appendChild(element)
  element.appendChild(headingOne)
  headingOne.appendChild(headingText)
  // Article + input and button
  const article = document.createElement('article')
  // Input
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'searchElement')
  input.setAttribute('placeholder', `Search free photo's`)
  // Button
  const button = document.createElement('button')
  button.setAttribute('id', 'searchPhotos')
  element.appendChild(article)
  article.appendChild(input)
  article.appendChild(button)
  // Search query in P
  const searchQuery = document.createElement('p')
  searchQuery.setAttribute('id', 'searchQuery')
  article.appendChild(searchQuery)
  // return (content.innerHTML = `
  //   <header>
  //     <h1>Discover</h1>
  //     <article>
  //       <input
  //         type="text"
  //         id="searchElement"
  //         placeholder="Search free photo's"
  //       />
  //       <button id="searchPhotos"></button>
  //     </article>
  //     <p id="searchQuery"></p>
  //   </header>
  // `)
}
