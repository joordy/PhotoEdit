// Create localStorage element for storing images when initializing app
export const LocalStorageSetup = () => {
  let images = []
  localStorage.setItem('value', JSON.stringify(images))
}
