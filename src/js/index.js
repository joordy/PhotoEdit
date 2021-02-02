import 'regenerator-runtime/runtime'

import { getMyData } from './utils/helpers/getMyData'
import { endpoint } from './utils/helpers/endpoints'
import { accessKey } from './utils/config/config'

let clicked = false
let button = document.querySelector('#searchPhotos')
button.addEventListener('click', functionName)

function functionName(clicked) {
  clicked = true
  console.log(clicked)
  checkDataSource(clicked)
}

const checkDataSource = (clicked) => {
  if (clicked == true) {
    console.log(clicked)

    let url = 'https://api.unsplash.com/search/photos/?client_id='
    let writtenQuery = document.getElementById('searchElement').value
    const abc = getMyData(`${url}${accessKey}&query=${writtenQuery}`)
    console.log(`Searched with the Query: ${writtenQuery}`)
  } else if (clicked == false) {
    console.log(clicked)
    let url = 'https://api.unsplash.com/photos/?client_id='
    const cba = getMyData(`${url}${accessKey}`)
    console.log(`Standard search`)
  }
}

const ab = checkDataSource(clicked)
