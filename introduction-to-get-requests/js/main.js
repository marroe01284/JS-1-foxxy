const API_URL = "https://catfact.ninja/facts"; // LINK FOR THE BACK END APPLICATION THE API

const factsContainer = document.querySelector(".facts-container");

// GET
fetch(API_URL, {method: 'GET'}).then((response) => response.json())
    .then((factsData) => {
        console.log("data: ", factsData.data);
        const totalNumberOfFacts = factsData.data.length;
        for (let i = 0; i < totalNumberOfFacts; i++) {

            console.log(i)
            console.log(factsData.data[i])
            factsContainer.innerHTML += `
            <div>
                <span>${factsData.data[i].fact}</span>
             </div>
            `
        }
    })