const currentCollection = sessionStorage.getItem("collectedBooks");
const collectionList = document.getElementById('collectionList')

let collectionTitles = currentCollection.split('#')
collectionTitles.shift()

for (const title of collectionTitles) {
    let bookTitle = document.createElement('li')
    bookTitle.innerText = title
    collectionList.appendChild(bookTitle)
}