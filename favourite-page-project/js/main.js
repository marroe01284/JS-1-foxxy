import productsData from "./data/products.js";

// 1. select the products container
const productsContainer = document.querySelector(".products-container");

// I want to get the saved favourite products in the local storage

const savedFavouritesProducts = JSON.parse(window.localStorage.getItem("favourites"));
console.log("savedFavouritesProducts: ", savedFavouritesProducts);


// i need to compare the saved array of fav products and the products data i have already


// 2. fill the container of the products with products

for (let i = 0; i < productsData.length; i++) {
    let cssClass = "";

    const doesObjectExist = savedFavouritesProducts.find(function (fav) {
        return parseInt(fav.id) === productsData[i].id
    });

    if (doesObjectExist) {
        cssClass = "active-heart";
    }

    productsContainer.innerHTML += `
            <div class="product">
                <img alt="random photo" src="https://picsum.photos/200" />
                <h3>${productsData[i].name}</h3>
                <h4>NOK ${productsData[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart ${cssClass}"
                    data-name="${productsData[i].name}"
                    data-id="${productsData[i].id}"
                    data-price="${productsData[i].price}"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="#000000"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
    `;
}

// 3. check if any of the FAV btns hearts clicked
const hearts = document.querySelectorAll(".heart");

// loop on the dom elements I selected hearts all the elements
// with class heart

let favsToSave = [];
for (let x = 0; x < hearts.length; x++) {
    hearts[x].addEventListener("click", function () {
        this.classList.toggle("active-heart");
        let productILikeToSave = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }

        favsToSave.push(productILikeToSave);
        saveFavs(favsToSave);
    });
}

function saveFavs(favouriteProducts) {
    window.localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
}
