// The HTML provides a structure for the shopping list application, including input fields for adding and filtering items and a list to display the items.
// The optional CSS styles the application, making it visually appealing.
// The JavaScript dynamically manipulates the shopping list:
// It initializes an empty array items to store the list items.
// The addItem function adds new items to the items array and updates the displayed list.
// The displayItems function dynamically creates list items (<li>) for each entry in the array and adds a removal button (<span>) that, when clicked, calls the removeItem function to remove the item from the array.
// The filterItems function filters the list items based on the user's input in the filter field and updates the display accordingly.


    const addItemButton = document.getElementById('add-item-btn');
    const itemInput = document.getElementById('item-input');
    const filterInput = document.getElementById('filter-input');
    const itemsList = document.getElementById('items-list');
    let items = [];

    const displayItems = (itemsToDisplay) => {
        itemsList.innerHTML = ''; // Clear the list
        itemsToDisplay.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeSpan = document.createElement('span');
            removeSpan.textContent = 'X';
            removeSpan.onclick = () => removeItem(index);
            li.appendChild(removeSpan);
            itemsList.appendChild(li);
        });
    };

    const addItem = () => {
        const itemValue = itemInput.value.trim();
        if (itemValue) {
            items.push(itemValue);
            itemInput.value = ''; // Clear input field
            displayItems(items);
        }
    };

    const removeItem = (index) => {
        items.splice(index, 1);
        displayItems(items);
    };

    const filterItems = () => {
        const filterValue = filterInput.value.trim().toLowerCase();
        const filteredItems = items.filter(item => item.toLowerCase().includes(filterValue));
        displayItems(filteredItems);
    };

    addItemButton.addEventListener('click', addItem);
    filterInput.addEventListener('input', filterItems);


