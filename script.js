//1. variables

// Ecmascript 5

// ES 5
var name = "anniken";

name = "Hesh";


// ES6
let secondName = "Tom";

secondName = "Alex"

const thirdName = "Marius The great";

// thirdName = "Julie";

// 2. console.log  -- console.dir console.info // yellow // console.error

// 3. >= <=  = ==

// "H" == "h"
// true now we are using not strict equality

"H" === "h" // false is called strict equality

"1" == 1 // true
"1" === 1 // false

// 4. conditions
// if() {}

// switch case

// 5. objects

let car = {
    // key   value
    color: "red",
    model: "bmw",
    year: "1992",
    VIN: 3434343
};

console.log(car); //
// {
//  color: "red",
//      model: "bmw",
//     year: "1992",
//     VIN: 3434343
// }

console.log(car.color);
console.log(car.year);

console.log(car["color"])

const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// Expected output: "Mario"

const person2 = {
    firstname: 'John',
    lastname: 'Doe',
};

console.log(person2['lastname']);
// Expected output: "Doe"


// 6. for loops


// starting point // condition // increment
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 7. arrays

let myBigBox = ["hesham", 22232, false, {name: "layla"}];

console.log(myBigBox.length); // I will get how many items in the array

console.log(myBigBox);

console.log(myBigBox[0]);

console.log(myBigBox[3].name);

// how to get the last item of the array


const lastItemIndex = myBigBox.length - 1;
console.log("lastItemIndex: ", lastItemIndex);

console.log(myBigBox[lastItemIndex]);

// 8. looping over an array

for (let i = 0; i < myBigBox.length; i++) {
    console.log(myBigBox[i])
}

// 0
// 1
// 2
// 3

// 9. concatenation

let theName = "Anniken";
let theSecondName = "Hesh";
let theThirdName = "Patrik";

// "" ''
let myParagraph = "Hello " + theName + " and hello " + theSecondName + " hello my friend, hello " + theThirdName;

console.log("using quotes: myParagraph: ", myParagraph);

myParagraph = `Hello ${theName} and hello ${theSecondName} hello ${theThirdName}`;

console.log("using backticks: ", myParagraph);

// 10. functions

function logWord(name) {
    // if (name !== undefined) {
    if (name) {
        console.log("Hello " + name + " Sir");
    } else {
        console.log("Sorry ;(");
    }
}

logWord("hesham"); // one time

logWord("Jonas"); // second time

logWord("Chris"); // third time
logWord();
logWord();
logWord();
logWord();
logWord();
logWord();
logWord();
logWord();
logWord();
logWord();