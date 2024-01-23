// Q1
// someFunction(); //YOU CANT DO THAT IN VARIABLE FUNCTIONS
// function expressions
// function assigned to a variable
const someFunction = function () {
    console.log("hello i am Hesh");
}


saySomethingFunction();

// normal function of JS
function saySomethingFunction() {
    console.log("hello Truls");
}

saySomethingFunction()


// Q2

// addEventListener
// select the .btn

const button = document.querySelector(".btn");

console.log(button);

// way 1
const handleClickTwo = function () {
    console.log("you clicked on me omg!!");
}

button.addEventListener("click", handleClickTwo);

button.addEventListener("click", function () {
    console.log("you clicked on me omg!!");
});


button.addEventListener("click", handleClick);

function handleClick() {
    console.log("you clicked on me omg!!");
}

// way 2

button.onclick = function () {
    console.log("omg you clicked me using onclick ;S");
}


button.onclick = function (event) {
    console.log(event.target.value);
    console.log(this.value);
}


// Q3 key press

// onKeyDown // the event will trigger when you press on
// onKeyUp // the event will trigger when you releases the key
// the onKeyPress

// onKeyDown onKeyUp NO ONE IS USING THEM ANYMORE AND onKeyPress

const myFirstNameInput = document.querySelector("#firstName");

console.log("myFirstNameInput", myFirstNameInput);

const handleKeyPress = function (event) {
    console.log("a key is pressed");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);


// Q4 hover event (detecting hover)

const theHoverBtn = document.querySelector(".pet-btn");


const handleMouseOver = function (event) {
    console.log("event.target.dataset.animal: ",event.target.dataset.animal);
    // change the backgroundColor of the btn
}
theHoverBtn.addEventListener("mouseover", handleMouseOver);