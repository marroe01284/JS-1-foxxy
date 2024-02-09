const selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))
const bookListDiv = document.getElementById("book-list");

displayBookDetails(selectedBook)

// Defines a function to display a book's information in the DOM
function displayBookDetails(book) {
    const bookDiv = document.createElement("div");
    const bookTitlePara = document.createElement("p");
    bookTitlePara.innerText = book.title;
    const bookImg = document.createElement("img");
    bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
    bookImg.alt = "a picture of a book";
    const bookBlurb = document.createElement('p')
    bookBlurb.innerText = book.blurb
  
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookTitlePara);
    bookDiv.appendChild(bookBlurb)
    bookListDiv.appendChild(bookDiv);
  }