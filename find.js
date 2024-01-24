// Create the function find(arr, value),
// which looks for the value in the array
// arr and returns it's number,
// if found, or -1 if not found.

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value){
            return arr[i];
        }
    }
    return -1;
}

const myArray = ["hesh", "jonas", "liv", "jackie"];
const valueToSearchFor = "liv";
let isNumber = find(myArray, valueToSearchFor);

console.log("isNumber: ",isNumber);
// test cases

// ["hesh", "jonas", "liv", "jackie"]
// [1, 2, 3, 18, 1000]
// [1, 2, 3, "hesh", "1000"]