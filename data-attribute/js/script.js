// console.log("here");
//
// In HTML, a data-* attribute is a way to store custom data on standard HTML elements.
//     The * in data-* can be replaced with any name you choose to create an attribute.
//     This feature, introduced in HTML5,
//     allows web developers to store extra information on an HTML
// element without using non-standard attributes or extra properties in the DOM.
//
//     How data-* Attributes Work
//
// Syntax: The attribute name should not contain any uppercase letters,
// and must be at least one character long after the prefix "data-".
//     Access in HTML: Appears as a regular attribute on an HTML element.
//     Access in JavaScript: Can be accessed via the dataset property on the DOM element.


const article = document.querySelector("#post");
const showPostDetailsBTN = document.querySelector("#show-post-details-BTN");
const postImg = document.querySelector("img");
console.log(postImg);


postImg.addEventListener("click", function (){
   window.open(postImg.dataset.fullsize, "_self");
});

// Q1. I have a BTN in my HTML , When I click on this
// BTN I want to show an alert with the author and
// the category
//
// showPostDetailsBTN.addEventListener("click", function () {
//     alert(`The book author is : ${article.dataset.author} and the category of the book is
//      ${article.dataset.category}, tusen takk <3
//      `)
// });
//
// showPostDetailsBTN.onclick = function () {
//     alert(`The book author is : ${article.dataset.author} and the category of the book is
//      ${article.dataset.category}, tusen takk <3
//      `)
// };

showPostDetailsBTN.onclick = function () {
    showBookDetails(article.dataset.author, article.dataset.category);
};


function showBookDetails(author, category) {
    alert(`The book author is : ${author} and the category of the book is
     ${category}, tusen takk <3
     `)
}