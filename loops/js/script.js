// loop is for repeating!!
//
// for(initialization; condition; increment;) {
//
// }
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// i = 0
// true
// i = 1

// i = 1
// true
// console.log (1)
//  1 + 1 = 2
// i = 2

// i = 2
// true
// console.log(2)
// increment 2 + 1
// i = 3

// true
// 3 + 1
/// console.log (3)

// i = 4

// true
// 4 + 1

// console.log(4)

// i = 5
// false
//


//
// 0  // good
// 1 //
// 2
// 3
// 4
//


// Task 1: Print Numbers
// Write a for loop that prints
// numbers from 1 to 10.


// for (let i = 1; i < 11; i++) {
// or
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 0       1       2         3
const cars = ["Tesla", "BMW", "Volvo", "VolksWagen"];

console.log(cars[0]);
console.log(cars[3]);
console.log(cars.length);

const totalNumberOfCars = cars.length;

for (let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i])
}
                // 0      1           2
const fruits = ["Apple", "Banana", "Cherry"];
// Given an array of fruits,
// write a for loop to print
// each fruit in the array.

for (let x = 0; x < fruits.length; x++) {
    console.log(fruits[x]);
}

console.log(fruits[2]);

// how to get the last item in the array

console.log("the length of the array , total number of items in the array", fruits.length);

console.log(fruits.length - 1);


const lastItemInTheArray = fruits.length - 1;
console.log(fruits[lastItemInTheArray]);


const totalFruits = fruits.length;
console.log("totalFruits: ", totalFruits);

console.log(fruits[totalFruits - 1]);



