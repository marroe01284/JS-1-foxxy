// I want to create a function in my calculator app
// to sum three numbers
// please write this function for me

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let result = addThreeNumbers(10, 20, 50);

console.log("result: ", result);

//
// Function Creation: Write a function named multiplyThreeNumbers.
// It should take three parameters: num1, num2, and num3.
//
//   Function Logic: Inside the function, return the product of
//   the three numbers.

//     Testing the Function: Call the function with
//     three numbers of your choice
//     and store the productResult in a variable.

//     Output the productResult: Use console.log to print out the result.

function multiplyThreeNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
}


let productResult = multiplyThreeNumbers(200, 300, 400);

console.log("productResult: ", productResult);


// 1. please select the heading h1 and when I click on the btn "change heading"
// change it to be "it's a god idag"

// 2. when I click on the BTN "change colours" I would like to change the
// background color of the body to be blue
// and the heading h1 to be green

let heading = document.querySelector("h1");
let button = document.querySelector("button");
let buttonColours = document.querySelector(".colours");
let body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "it's a god idag";
}

button.onclick = changeHeading;

function changeColours() {
    body.style.backgroundColor = "purple";
    heading.style.color = "black";
}

buttonColours.onclick = changeColours;


// functions inside objects


const catBTN = document.querySelector(".the-cat-btn");

const pet = {
    type: "cat",
    name: "Titty",
    age: 10,
    isFriendly: false,
    meawMeaw: function () {
        console.log("🐈 🐈🐈  the sound of the cat 😾😾😾😾😾😾😾😾😾");
    }
};


console.log("type: ", pet.type);
console.log("is the cat friendly: ", pet.isFriendly);

// pet.meawMeaw();

console.dir(catBTN);
catBTN.onclick = pet.meawMeaw;


// create a btn which is called Meaw Meaw
// when you click on this btn i want to run the function
// in the object pet which is : meawMeaw












