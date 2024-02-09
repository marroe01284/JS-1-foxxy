const selectedBook = JSON.parse(sessionStorage.getItem('selectedBook'))
const bookListDiv = document.getElementById("book-list");

displayBook(selectedBook)

// Defines a function to display a book's information in the DOM
function displayBook(book) {
    const bookDiv = document.createElement("div");
    const bookTitlePara = document.createElement("p");
    bookTitlePara.innerText = book.title;
    const bookImg = document.createElement("img");
    bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
    bookImg.alt = "a picture of a book";
    bookImg.addEventListener('click',()=>{
      // navigate to details page
      sessionStorage.setItem("selectedBook",JSON.stringify(book))
      window.location.href = "http://127.0.0.1:5500/shelf-help-demo-build/pages/details.html"
    })
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookTitlePara);
    bookListDiv.appendChild(bookDiv);
  }