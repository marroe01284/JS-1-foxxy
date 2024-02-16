// get the data and check what it looks -> search by name
let beerData = [];

const searchForm = document.getElementById("search");

fetch("https://api.punkapi.com/v2/beers")
  .then((reponse) => reponse.json())
  .then((result) => {
    beerData = result;
  });

searchForm.addEventListener(
  "input",
  debounce((event) => {
    event.preventDefault();

    const searchWordFromUser = searchForm.searchWord.value;
    let resultsOfSearch = beerData.filter((beer) => {
      return searchWordFromUser.split(" ").every((word) => {
        return beer.name.includes(word);
      });
    });

    renderBeers(resultsOfSearch);
  }, 500)
);

function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function renderBeers(beers) {
  console.clear();
  for (const beer of beers) {
    console.log(beer);
  }
}

// let searchResult = beerData.filter((beer) => beer.name.includes(query));

// let searchResultByWord = beerData.filter(item => {
//     return query.split(" ").every(word => {
//       return item.name.includes(word);
//     });
//   });
