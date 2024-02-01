// data
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (httpResponse) {
    return httpResponse.json();
  })
  .then((data) => console.log(data));

async function getTodos() {
  let httpResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await httpResponse.json();
  console.log(data);
}

getTodos();

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((httpResponse) => console.log(httpResponse));

fetch("https://jsonplaceholder.typicode.com/todos/47", {
  method: "DELETE",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then(function (httpResponse) {
  // extract the data (using the json function)
  console.log(httpResponse);
});
