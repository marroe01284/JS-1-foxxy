// The HTML structure provides a form for adding new users and an input for searching by name. It also includes a div where the list of users will be displayed.
// The optional CSS styles the form and user list for better visual presentation.
// The JavaScript part:
// Initializes an empty array users to store user objects.
// Attaches an event listener to the form for adding new users. When the form is submitted, it prevents the default form submission, retrieves the input values, adds the new user to the users array, and updates the display.
// Adds an event listener to the search input field to filter displayed users based on the search query. It updates the display dynamically as the user types.
// Implements addUser function to create a new user object and push it into the users array.
// Implements displayUsers function to iterate over the provided users array (either all users or filtered ones), creating and appending div elements for each user to the users list div.

let users = [];

document.getElementById('add-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    addUser(name, email, role);
});

document.getElementById('search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    displayUsers(users.filter(user => user.name.toLowerCase().includes(searchQuery)));
});

function addUser(name, email, role) {
    const user = { name, email, role };
    users.push(user);
    displayUsers(users);
}

function displayUsers(usersArray) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = ''; // Clear existing users
    usersArray.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Name: ${user.name}, Email: ${user.email}, Role: ${user.role}`;
        usersList.appendChild(userDiv);
    });
}

// Initially display all users
displayUsers(users);
