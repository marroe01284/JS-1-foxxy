// let newsItem1 = {
//     headline: "Headline 1",
//     summary: "Lorem ipsum dolor sit amet."
// };

// let newsItem2 = {
//     headline: "Headline 2",
//     summary: "Consectetur adipisicing elit."
// };

let news = [
    {
        headline: "Headline 1",
        summary: "Lorem ipsum dolor sit amet."
    },
    {
        headline: "Headline 2",
        summary: "Consectetur adipisicing elit."
    },
    {
        headline: "Headline 3",
        summary: "Consectetur  elit."
    },
    {
        headline: "Headline 4",
        summary: "Consectetur  elit."
    },
];

console.log(news);

let newsContainer = document.querySelector(".news");


for (let i = 0; i < news.length; i++) {

    let item = news[i];
    console.log(item.headline);

    console.log(item.summary);

    newsContainer.innerHTML += "<h2>" + item.headline + "</h2><p>" + item.summary + "</p>";

}
