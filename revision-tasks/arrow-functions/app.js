// This is not a task just some examples

// Traditional Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

const numbers = [1, 2, 3, 4];
const squares = numbers.map(function(number) {
    return number * number;
});

// Using arrow function
const squaresArrow = numbers.map(number => number * number);

const myObject = {
    property: 'Hello, World!',
    traditionalMethod: function() {
        console.log(this.property); // 'this' refers to myObject
    },
};

const myObjectWithArrow = {
    property: 'Hello, World!',
    methodWithArrow: () => {
        console.log(this.property); // 'this' is lexically bound
    },
};

let extractedTraditionalMethod = myObject.traditionalMethod()

extractedTraditionalMethod()

let extractedArrowMethod = myObjectWithArrow.methodWithArrow()

extractedArrowMethod()