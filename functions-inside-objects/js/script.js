const pet = {
    type: "cat",
    name: "Harold",
    age: 12,
    isFriendly: false,
    sayHello: function() {
        console.log("Hello my age is " + this.age);
    }
};

// const pet = new Object();

// pet.name = "Burt";
// pet.age = 34;
// pet.surname = "Smith";

// console.log(pet)

pet.sayHello();