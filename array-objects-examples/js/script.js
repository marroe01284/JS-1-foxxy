// // ARRAYS
//
// // 0       1              2
// const fruits = ["Apple", "blue berry", "oranges"];
//
// console.log(fruits.length); // 3 the total items in the array
//
// fruits.push("Mango"); // adding new item to the array to the end
//
// console.log(fruits);
// fruits.unshift("grapes"); // adding new item in the beginning of the array
// console.log(fruits);
//
// // remove the last item in the array
//
// fruits.pop();
//
// console.log("using pop : ", fruits);
//
// fruits.shift();
// console.log("using shift", fruits);
//
// const numbers = [3, 4, 100, 88, 54, 5];
//
// numbers.sort();
// console.log(numbers);
//
//
//
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
//
//
//             // 0 1 2
// let animal = "dog";
//
// console.log(animal.length);
//
//          //    0      1              2
// const cars = ["bmw", "volkswagen", "toyota" , "volkswagen"];
//
// console.log("The index of volkswagen: is ", cars.indexOf("volkswagen"));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // const API_URL = "https://api.example.com/data";
// // const PORT = 8080;
// // const MAX_CONNECTIONS = 4;
// //
// // const DB_HOST = 'localhost';
// // const DB_USER = 'root';
// // const API_KEY = 'abcdef12345';
// //
// //
// // const PI = 3.14159;
// // const GRAVITY = 9.8;
// //
// //
// // // saying to the other developer
// // // this is not to change should not changed
// //
// // // readability


// .find

const user = {
    name: "Monde",
    age: 30,
    job: "Software Engineer",
    wealth: 21893652176873912
}

console.log(user);
console.log(user.age + " " + user.name);
console.log(user.name, user.age);
console.log(user.wealth);


// Hello my name is Monde and i am 30 years old, I own
// 21893652176873912 in dollars and i work as a Software Engineer


const someText = "Hello my name is " + user.name;
console.log("someText: ", someText);

const someTextTwo = `Hello  my name is ${user.name}`;
console.log(someTextTwo);


// Hello my name is Monde and i am 30 years old, I own
// 21893652176873912 in dollars and i work as a Software Engineer


const books = [   // my title is "the hobbit" is it equal to the string i ahve the hobbit"
    // false
    {
        title: "the hobbit",
        author: "Hesham El Masry",
        pages: 300
    },
    // false
    {
        title: "Drive with me in my car",
        author: "Kevin Heart",
        pages: 1000
    },
    // false
    {
        title: "One Thousand and One Nights",
        author: "some guy",
        pages: 3000
    }
]


const searchBook = books.find(function (book) {
    // task please find the book which has more than 300 pages
    return book.pages > 300;

    // return book.title.toLowerCase() === ("the Hobbit").toLowerCase(); // "the hobbit"
});

console.log("searchBook: ", searchBook);

//
// console.log("my first book ", books[0]);
// console.log("my first book ", books[1]);
// console.log("my first book ", books[2]);


// function is a set of action or code run when we call this function name


function doorRing(withCamera) {
    console.log("i will go open the door the person is: " + withCamera);
}

doorRing("Monde photo");


function logWord(theWord) {
    console.log(theWord);
}

logWord("hesham");
logWord("Line");


function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);

console.log("sum: ",sum);











