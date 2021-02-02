import 'regenerator-runtime/runtime';

import { getMyData } from './utils/helpers/getMyData';
import { endpoint } from './utils/helpers/endpoints';
import { accessKey } from './utils/config/config';

let clicked = false;
let button = document.querySelector('#searchPhotos');
button.addEventListener('click', functionName);

function functionName(clicked) {
  clicked = true;
  console.log(clicked);
  checkDataSource(clicked);
}

console.log(clicked);

const checkDataSource = (clicked) => {
  if (clicked == true) {
    getMyData('https://opendata.rdw.nl/resource/b3us-f26s.json');
  } else if (clicked == false) {
    let url = 'https://api.unsplash.com/photos/';
    let clientID = '?client_id=';
    const cba = getMyData(`${url}${clientID}${accessKey}`);
  }
};

const ab = checkDataSource(clicked);
// const checkDataSource = (accessKey) => {
//   let clicked = false;
//   let button = document.querySelector('#searchPhotos');
//   button.addEventListener('click', functionName);

//   if ((clicked = false)) {
//     const abc = getMyData('https://opendata.rdw.nl/resource/b3us-f26s.json');
//     return abc;
//   } else {
//     let url = 'https://api.unsplash.com/photos/';
//     let clientID = '?client_id=';
//     const cba = getMyData(`${url}${clientID}${accessKey}`);
//     return ab;
//   }
// };

// const ab = checkDataSource(accessKey);

// console.log(ab);
// getMyData(endpoint).then((abc) => {
//   // console.log(endpoint);
//   console.log(abc);
// });

// const button = document.querySelector('#searchPhotos');
// button.addEventListener('click', () => {
//   console.log('abcc');
//   return abc
// });
