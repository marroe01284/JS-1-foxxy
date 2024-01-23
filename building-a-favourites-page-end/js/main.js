// we will build a favourites page using localStorage.
//
// On the index page, clicking an icon button will
// add or remove an item from an array in localStorage.

// On the favourites page, the items in storage will
// be retrieved and displayed.
//
// Because localStorage can only store string values,
// we’ll use JSON.stringify and JSON.parse to set
// and get the array of favourites to and from storage.

import products from "./data/products.js";

const productsContainer = document.querySelector(".products-container");
const favourites = getExistingFavs();

// loop over the array

for (let i = 0; i < products.length; i++) {
    let cssClass = "";

    // do it at last, check if the product exist in the array of favs in localstorage
    // if exists then add the class .active-heart to it
    const doesObjectExist = favourites.find(function (fav) {
        return parseInt(fav.id) === products[i].id;
    })

    if (doesObjectExist) {
        cssClass = "active-heart";
    }

    productsContainer.innerHTML += `
        <div class="product">
            <h4>${products[i].id}</h4>
            <h3>${products[i].name}</h3>
            <span class="heart">
                <svg
                 class="${cssClass}"
                 data-name="${products[i].name}"
                 data-id="${products[i].id}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
        </div>
    `;
}

// select all the favourite Buttons
// and when I select on any of them it will change the fill and stroke

const favButtons = document.querySelectorAll("svg");
console.log("favButtons: ", favButtons);

for (let x = 0; x < favButtons.length; x++) {
    favButtons[x].addEventListener("click", handleClick);
}

function handleClick(event) {
    console.log(event);
    this.classList.toggle("active-heart");
    console.log(this.dataset); // get the access to all the data attributes
    const id = this.dataset.id;
    const name = this.dataset.name;
    console.log("id", id);
    console.log("name", name);

    // want to take those id and name and store then in
    // an object then I want to store it in an array
    // then I want to save them to my Local Storage


    const currentFavs = getExistingFavs();
    // check if this product is in fav , if it is there add it if not
    // remove it
    // does this product already exist in the array ?
    const productExist = currentFavs.find(function (fav) {
        return fav.id === id; // undefined if it is not in the array, or it will return the
        // object
    });

    // if(!productExist){ // if product doesn't exist // undefined
    if (productExist === undefined) { // if product doesn't exist // undefined
        const product = { // create the object I want to push to the array
            id: id, name: name
        };

        // push it to the currentFav variable

        currentFavs.push(product);
        console.log("currentFavs after adding one more item ", currentFavs);
        // save my new currentFav in the local storage
        saveFavs(currentFavs);
        // we need to fix to only add if it is not the array already
        // meaning not in favs
    } else {
        // I will remove this object from the array
        // filter method, it will run and filter the array and returns
        // a new array
        const newFavs = currentFavs.filter(fav => fav.id !== id);
        // this will go on the array of currentFavs, and it will return all
        // the items which doesn't have this id
        // save the array
        saveFavs(newFavs);
        // filter method always create new array
    }
}

function getExistingFavs() { // we will get all the existing favourite products
    const favs = window.localStorage.getItem("favourites");
    console.log("favs", favs);

    // I want to return an empty array if no favs
    if (!favs) { // meanings that if it is equal to null or undefined
        return [];
    } else {
        return JSON.parse(favs); // otherwise return my favourites
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
