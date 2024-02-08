// let array = [2, 5, 6, 8];

// let num1 = array[0];
// let num2 = array[1];

// let [num1Des, num2Des] = array;

// let duckName = duck.name;
// let duckHabitat = duck.habitat;
// let duckHeight = duck.height;

// console.log("The duck was named " + duckName);

// let { name: duckNameDes, habitat, height } = duck;

// console.log(duckNameDes);
// console.log(habitat);
// console.log(height);

// function sum(...numbers) {
//   let total = 0;

//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }

function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }
  return total;
}

// console.log(sum(...numbers))

// let newNumbers = [...numbers,5,9,5]

// let duck = {
//     id: 1,
//     name: "Tim",
//     habitat: "Swamp",
//     height: 25,
//     diet: "Green stuff",
//   };

//   let newDuck = {
//     ...duck,
//     dangerous:false
//   }

let numbers = [1, 6, 6, 6, 2, 6, 3, 7, 3, 7];

let copyOfNumbers = [...numbers];

console.log(numbers);
console.log(copyOfNumbers);

copyOfNumbers.push(1000);

console.log(numbers);
console.log(copyOfNumbers);

let duck = {
  id: 1,
  name: "Tim",
  habitat: "Swamp",
  height: 25,
  diet: "Green stuff",
};

let copyOfDuck = {...duck}
