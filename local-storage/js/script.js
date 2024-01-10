const myVariable = "some variable";

window.localStorage.setItem("variable1", myVariable);
localStorage.setItem("variable2", "some random string");


// it allows us to save data across pages and across tabs


// to clear local storage

// localStorage.clear();


// retrieve an item


const variable2 = localStorage.getItem("variable2");

console.log("variable2: ",variable2);

// if you want to store an array or object you need to stringify that


// mean you make it string

const colours = ["red", "yellow", "green"];

localStorage.setItem("colours", JSON.stringify(colours));

const myColours = localStorage.getItem("colours");

// if we try to log the type it will show string

console.log(typeof myColours);

// we need to convert it back to JS Array

const parseColours = JSON.parse(myColours);

console.log("parseColours: ",parseColours);

// JSON.stringify - to save
// JSON.parse - to retrieve


// localStorage is across all tabs

// sessionStorage is only one tab
