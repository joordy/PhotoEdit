# Web App From Scratch

## 🔦 **Description**

In this course I'll learn how to create a single page web application without the use of a framework or unnecessary JavaScript libraries. I use HTML, CSS and Vanilla JavaScript to create this application. With these tools I'll create a virtual dom, including a router. The data is retrieved from a self-selected API and displayed inside the interface.

---

## 🌐 **Live link**

The final result of this course can be viewed here: [wafs-jor.netlify.app](https://wafs-jor.netlify.app/)

![Live Application](https://user-images.githubusercontent.com/48051912/109559822-78520600-7adb-11eb-88ed-619698296240.png)

---

## 🚀 **Features**

My application contains different possibility's. For example, it is possible to search for specific photos using your own search term, select this photo, view all information about it, and edit the photo as desired.

In creating these applications, I used different methods to make my own choices here:

### **Folder structure**

During this course I spent a lot of time writing neat modules. Personally, I like it when my code is clean, this means that I don't repeat myself (DRY), and my files are not hundreds of lines long.

To comply with this I have created several folders. These are all located in my ** utils / ** folder.

```md
src/
+-- js/
| +-- utils/
| | +-- components/
| | +-- config/
| | +-- data/
| | +-- helpers/
| | +-- routes/
| | +-- views/
| +-- index.js
+-- styles/
| +-- components/
| +-- index.css
+-- index.html
```

### Folders

Every folder contains specific features. The **components** folder supplies the HTML elements for the application. The HTML elements are created in these folders. Larger code blocks are separate in this folder. Every other conceivable HTML element that is used is in the _elements_ folder. These are used throughout the application.

The **config** folder contains all information about the API. Think of the API key and the different endpoints.

The **data** folder ensures, among other things, that everything about API data and user data / input is processed. This includes the event handlers, various searches, localStorage and the search for a specific ID.

The **helpers** folder contains various elements such as the fetch function, data filters, query injectors and image filters. These are used throughout the application in addition to the concept.

The **router** folder contains 1 file, namely the router itself. The Navigo router is used here. Here, all possible pages are handled by the router.

The **views** folder contains all pages that are rendered after the request from the router. The 4 pages retrieve all information from other files, in order to make it a whole.

<!-- #### **Components**

The **components/** folder consists of all kinds of small elements in the elements / folder, which enable me to create HTML elements in JavaScript. Larger blocks of HTML are in the root of the **components/** folder.

#### **Config**

lorem ipsum

#### **Data**

lorem ipsum

#### **Helpers**

lorem ipsum

#### **Routes**

lorem ipsum

#### **Views**

lorem ipsum -->

### **Custom components**

The **components/** folder consists of all kinds of small elements in the elements / folder, which enable me to create HTML elements in JavaScript. Larger blocks of HTML are in the root of the **components/** folder.

```js
export const HeadingOne = (item) => {
  const elem = document.createElement('h1')
  const textnode = document.createTextNode(item)

  elem.appendChild(textnode)

  return elem
}
```

### **Importing elements**

To avoid having dozens of 'import' lines on the first lines of my javascript files, I created an index.js in every folder. This file imports all possible functions from the relevant folder, and ensures that I can import these functions in 1 line of code where necessary. It's a DRY way of importing all the needed functions and variables inside JavaScript.

#### **Example:**

```js
// ❌ Bad code
import { functionOne } from './file1.js'
import { functionTwo } from './file2.js'
import { functionThree } from './file3.js'
import { functionFour } from './file4.js'
import { functionFive } from './file5.js'
import { functionSix } from './file6.js'
```

```js
// ✅ Clean code
import {
  functionOne,
  functionTwo,
  functionThree,
  functionFour,
  functionFive,
  functionSix,
} from './index.js'
```

---

## 📄 **Actor Diagram**

![actor](https://user-images.githubusercontent.com/48051912/109558849-34123600-7ada-11eb-8dbc-b3d23574f811.png)

---

## 📊 **Interaction Diagram**

![interaction](https://user-images.githubusercontent.com/48051912/109558866-3a081700-7ada-11eb-9e87-726e8949b048.png)

---

## 📈 **Datasets**

For this project I made use of the Unsplash API for Developers. The API gives access to the world largest open collection of high quality photos, totally free. With using different querys, like searching, popular, etc etc, the user can receive a lot of information about the image. All the available information contains:

### Used endpoints

To make use of my application I've used two differend

- `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
- `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${SEARCH_QUERY}&per_page=33&order_by=popular `
- `https://api.unsplash.com/photos/1gLdTsX3_70?client_id=${API_KEY}`

### API Response

After requesting the API you will receive an object with a lot of information about the photos. Below is described what all information means.

```js
image = {
  alt_description:  ,           // Second description
  blur_hash: ,                  // Hashed ID
  categories: ,                 // Image categories
  color: ,                      // Color ?
  created_at: ,                 // Created timestamp
  current_user_collections: [], // The current user collection
  description: ,                // Image description
  downloads: ,                  // Total downloads
  exif: ,                       // Camera Settings
  height: ,                     // Image height in PX
  id: ,                         // Image ID
  liked_by_user: ,              // Liked by user
  likes: ,                      // Total likes
  links: ,                      // Links to download information
  location: ,                   // Location of image
  meta: ,                       // Meta information
  promoted_at: ,                // Promoted timestamp
  related_collections: ,        // Related collections with this image
  sponsorship: ,                // Sponsored image
  tags: ,                       // Image tags
  updated_at: ,                 // Updated timestamp
  urls: {},                     // All image URLS, thumbs, small, regular, full, raw
  user: ,                       // Information about user
  views: ,                      // Total image views
  width: ,                      // Image width in PX
}
```

---

## 💻 **Installation**

### Clone the repository

```bash
  git clone https://github.com/joordy/web-app-from-scratch-2021.git
```

### Navigate to the repository and nstall the packages

```bash
  npm install
```

### Start local dev environment

```bash
  npm run dev
```

### Build export

```bash
  npm run build
```

---

## 🔍 **Sources**

- Unsplash. (n.d.). Unsplash Image API | Free HD Photo API. Unsplash. Retrieved February 1, 2021, from [https://unsplash.com/developers](https://unsplash.com/developers)
- Unsplash. (n.d.-a). API Documentation | Free HD Photo API. Retrieved February 1, 2021, from [https://unsplash.com/documentation](https://unsplash.com/documentation)
- MDN.. (2021, February 19). Node.appendChild() - Web APIs | MDN. Retrieved February 3, 2021, from [https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- MDN.. (2021, February 19). Node.removeChild() Web APIs | MDN. Retrieved February 9, 2021, from [https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- MDN.. (2021, February 19). Window.localStorage - Web APIs | MDN. Retrieved February 15, 2021, from [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Krasimir. (n.d.). krasimir/navigo. GitHub. Retrieved February 15, 2021, from [https://github.com/krasimir/navigo](https://github.com/krasimir/navigo)
- Banik, A. (n.d.). Add Image to HTML5 Canvas using JavaScript. Encodedna. Retrieved February 15, 2021, from [https://www.encodedna.com/html5/canvas/add-image-to-html5-canvas-using-javascript.htm](https://www.encodedna.com/html5/canvas/add-image-to-html5-canvas-using-javascript.htm)
- Morales, A. J. (2021, January 19). How To Use Preload and Prefetch in HTML to Load Assets. DigitalOcean. Retrieved February 15, 2021, from [https://www.digitalocean.com/community/tutorials/html-preload-prefetch](https://www.digitalocean.com/community/tutorials/html-preload-prefetch)
- Netlify. (n.d.). Redirects and rewrites. Netlify Docs. Retrieved February 18, 2021, from [https://docs.netlify.com/routing/redirects/](https://docs.netlify.com/routing/redirects/)

---

## 🔐 **License**

This is a repository which is licensed as [MIT](https://github.com/joordy/PhotoPaint/blob/master/LICENSE). Developed by Jordy Fronik ©️ 2021.

---

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
