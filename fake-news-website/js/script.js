// let news = [
//     {
//         headline: "Watch Hesh landing on the moon",
//         summary: "He landed with his super jet"
//     },
//     {
//         headline: "Watch the minions",
//         summary: "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!"
//     },
//     {
//         headline: "Watch the GRU aying hello",
//         summary: "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!"
//     },
//     {
//         headline: "Watch the GRU aying 22222",
//         summary: "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!"
//     },
// ];
//
// console.log(news);
//
// // present the news on the
// // page
//
//
// // 1. select the div with news
// // class
//
// let newsContainer = document.querySelector(".news");
//
// console.log("newsContainer", newsContainer);
//
// function createNews(newsArray){
//     let newsItems = "";
//     const totalNumberOfNews = newsArray.length;
//
//     for (let i = 0; i < totalNumberOfNews; i++) {
//
//         console.log(newsArray[i].headline);
//         console.log(newsArray[i].summary);
//         // 0
//         newsItems = newsItems + `
//     <div>
//         <h2>${newsArray[i].headline}</h2>
//         <p>${newsArray[i].summary}</p>
//     </div>
//     `
//     }
//     return newsItems;
// }
//
// newsContainer.innerHTML = createNews(news);
//
//
//


const cats = [
    { // 0
        name: "Mocho",
        age: 2
    },
    { // 1
        name: "titty",
        age: 3
    },
    { // 2
        name: "dodo",
        age: 5
    }
];

function getName(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

//
// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i].name);
// }
//
//

getName(cats);


const dogs = [
    { // 0
        name: "jackson",
        age: 2
    },
    { // 1
        name: "polo",
        age: 3
    },
    { // 2
        name: "mailo",
        age: 5
    }
];

getName(dogs);


function createShoppingList(shoppingList) {

    let myShoppingListItems = "";

    for (let i = 0; i < shoppingList.length; i++) {
        myShoppingListItems += `
                <div>
                    <h2>${shoppingList[i].name}</h2>
                    <h3>${shoppingList[i].price}</h3>
                </div>
        `
    }
    return myShoppingListItems
}


let lineShoppingList = [
    {
        name: "orange juice",
        price: 200
    },
    {
        name: "chocolata",
        price: 100
    }
]

const lineShoppingListContainer = document.querySelector(".line-shopping-list");

lineShoppingListContainer.innerHTML = createShoppingList(lineShoppingList);








