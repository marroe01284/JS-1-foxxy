const myName  = window.localStorage.getItem("name");

console.log("myName: ",myName);


const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// parse

const myCarParsed = JSON.parse(myCar);

console.log(myCarParsed);
