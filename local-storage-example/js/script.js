// local storage
// session storage

const myVariable = "some text";

window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("name", "hesham");

// save objects
// save arrays


let car = {
    make: "bmw",
    model: 1992,
    price: 2000
}
window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav","bmw");


// use local storage
// create three items there
// first is a variable string one
// second is a object
// third is an array


let puddingFlavour = "Chocolate";

let coffee = {
    origin: "South Africa",
    intensity : "medium 7"
}

let shoppingList = ["coffee", "jam", "milk"];
//
//
// store the data in the localstorage
//
// adn then get the items from the local storage
//
// please use JSON.stringify and JSON.parse
