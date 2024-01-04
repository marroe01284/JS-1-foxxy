// // console.log("here");
// //
// // // if and else statements
// //
// // let temp = 34;
// //
// // if (temp > 30) {
// //     console.log("It is very hot man!!");
// // } else if (temp > 20) {
// //     console.log("the weather is nice ")
// // } else {
// //     console.log("the weather is very cold)");
// // }
// //
// // // At school my students had an exam. some students
// // // got score high and low. i want to write an
// // // if else statement to check if the score is high
// // // or low.
// // // if the score is less than 50 then the students
// // // fails print fail
// // // the score is more than or equal 50 then the student
// // // passed print passed
// //
// //
// // // please use the variable score to do your condition
// //
// //
// // let score = "A";
// //
// // // A means very good
// // // B means good
// // // C means average
// // // D means you need to start to think to do something else
// // // otherwise you failed badly
// //
// // if (score === "A") {
// //     console.log("Very Good " + "You got a core of \n" + score);
// // } else if (score === "B") {
// //     console.log("Good!");
// // } else if (score === "C") {
// //     console.log("Average");
// // } else if (score === "D") {
// //     console.log("You need to start to think to do something else");
// // } else {
// //     console.log("You failed badly!");
// // }
// //
// //
// // const sentences = `First sentence.
// //                    Second sentence.`
// // console.log(sentences);
// //
// // const sentences2 = "First sentence.\n Second sentence."
// //
// //
// // let grade = 70;
// //
// // if (grade >= 90) { // false
// //     console.log("A");
// // } else if (grade >= 70) { // true
// //     console.log("B");
// // } else {
// //     console.log("You failed");
// // }
//
//
// //  2. switch case
//
// let color = "yellow";
// //
// // if (color === "red") {
// //     console.log("Stop!");
// // }
//
// switch (color) {
//     case "red":
//         console.log("Stop!!");
//         break;
//     case "yellow":
//         console.log("Get Ready!!");
//         break;
//     case "green":
//         console.log("Go!");
//         break;
//     default:
//         console.log("No traffic lights go murder people!");
// }
//
//
// let grade = 'a'; // Change this value to test different outcomes
//
// console.log(grade.toUpperCase());
//
// grade = grade.toUpperCase();
//
// switch (grade) {
//     // Implement the cases here
//     case "A":
//         console.log("Good boy");
//         break;
//     default:
//         console.log("yeah okay");
// }
//
//
// let myname = "Hesham";
// let alsoMyName = "hesham";


// 3. scope


var name = "hesham"; // global scope

let myName = "hesham"; // function scope


var greeting = "Hello";


if(true){
    var greeting = "Hi"; // re declareed my variable
    console.log(greeting); // Hi
}

console.log(greeting); // hi


let message = "Hello";

if(true) {
    let message = "Hi";
    console.log(message);
    message = "hello man";
    console.log(message)
}

// console.log(message);


let grade = "A";

grade = "b";
console.log(grade)


// const you define it once in your application
// let you define it and then you can change the value of it

const MY_NAME = "Hesh";

if(true){
    console.log(MY_NAME);
}

console.log(MY_NAME);