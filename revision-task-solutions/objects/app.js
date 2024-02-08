// The HTML provides a form for inputting new books and a container where the library will be displayed.
// The optional CSS styles the page for a more pleasant user experience.
// The JavaScript:
// Defines a createBook function that returns a book object (POJO) with a toggleRead method.
// Implements an addBookToLibrary function to add a new book object to the library array and refresh the display.
// Uses a displayLibrary function to iterate over the library array, creating a div for each book that displays its details and a button to toggle the read status.
// Attaches an event listener to the form to add a new book upon submission, prevent the default form submission behavior, and clear the form afterward.
// This solution demonstrates how to work with POJOs for data management and manipulation, dynamically update the web page based on data changes, and handle user input in a structured and interactive web application.

let library = [];

function createBook(title, author, pages, read) {
    return {
        title,
        author,
        pages,
        read,
        toggleRead() {
            this.read = !this.read;
        }
    };
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = createBook(title, author, pages, read);
    library.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    const display = document.getElementById('library-container');
    display.innerHTML = ''; // Clear previous content

    library.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'read' : 'not read'}`;
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.addEventListener('click', () => {
            book.toggleRead();
            displayLibrary();
        });
        bookDiv.appendChild(toggleReadBtn);
        display.appendChild(bookDiv);
    });
}

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
    this.reset(); // Reset form fields
});

displayLibrary(); // Initial display
