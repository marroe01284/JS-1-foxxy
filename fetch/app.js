// data
let todos;

let todo = fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (httpResponse) {
    // extract the data (using the json function)
    return httpResponse.json();
  })
  .then(function (todoResult) {
    // do something with the data (store it in the todos variable)
    todos = todoResult;
  });

console.log("other stuff");
// show it to the users
