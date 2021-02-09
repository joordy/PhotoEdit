let clicked = false

export function setVariable(newValue) {
  clicked = newValue
  console.log(clicked)
}

export function getVariable() {
  // console.log(clicked)

  return clicked
}

export default clicked
