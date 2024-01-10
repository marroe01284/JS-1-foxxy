let selectedNumber = 70;
let lowerLimit = 10;
let upperLimit = 50;

if ((selectedNumber >= lowerLimit) && (selectedNumber <= upperLimit)) {
    console.log("Within range");
} else {
    if (selectedNumber < lowerLimit) {
        console.log("Number is too low");
    }

    if (selectedNumber > upperLimit) {
        console.log("Number is too high");
    }
}