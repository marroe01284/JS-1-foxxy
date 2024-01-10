// declare the function
function addNumbers(num1, num2, num3) {
    // console.log(num1 + num2 + num3);
    return num1 + num2 + num3;
}

// call the function
let result = addNumbers(5, 10, 7);

console.log(result);


let heading = document.querySelector("h1");
let button = document.querySelector("button");
let buttonColours = document.querySelector(".colours");
let body = document.querySelector("body");

// console.dir(button);

function changeHeading() {
    heading.innerHTML = "updated heading";
}

button.onclick = changeHeading;


function changeColours() {
    body.style.backgroundColor = "orange";
    heading.style.color = "green";
}

buttonColours.onclick = changeColours;