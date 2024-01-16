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

const favourites = getExistingFavs();

console.log("favourites: ", favourites);

const productsContainer = document.querySelector(".products-container");


for (let i = 0; i < favourites.length; i++) {
    productsContainer.innerHTML += `
        <div class="product">
            <h4>${favourites[i].id}</h4>
            <h3>${favourites[i].name}</h3>
            <span class="heart">
                <svg class="active-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </span>
        </div>
    `;
}