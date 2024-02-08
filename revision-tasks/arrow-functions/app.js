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
        console.log(this); // 'this' refers to myObject
    }
};

const myObjectWithArrow = {
    property: 'Hello, World!',
    methodWithArrow: () => {
        console.log(this); // 'this' is lexically bound
    }
};

myObject.traditionalMethod() // maintains reference to the object
myObjectWithArrow.methodWithArrow() // loses reference to the object (prints out window object)