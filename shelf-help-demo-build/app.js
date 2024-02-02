// !! Need the shelf help JSON server to be running on http://localhost:3000

// fetch the book data.
const bookListDiv = document.getElementById("book-list");
let bookData = [];

fetch("http://localhost:3000/books")
  .then((response) => response.json())
  .then((bookResultData) => {
    bookData = bookResultData;

    for (const book of bookData) {
      displayBook(book);
    }
  });

// function to create and insert the HTML to display a book
function displayBook(book) {
  const bookDiv = document.createElement("div");
  const bookTitlePara = document.createElement("p");
  bookTitlePara.innerText = book.title;
  const bookImg = document.createElement("img");
  bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
  bookImg.alt = "a picture of a book";
  bookDiv.appendChild(bookImg);
  bookDiv.appendChild(bookTitlePara);
  bookListDiv.appendChild(bookDiv);
}
