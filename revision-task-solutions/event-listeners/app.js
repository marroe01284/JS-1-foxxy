document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const tasksList = document.getElementById('tasks-list');
    const taskInput = document.getElementById('task-input');

    // Event listener for adding a task. The anonymous function is the callback
    addButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            tasksList.appendChild(li);
            taskInput.value = ''; // Clear input field
        }
    });

    // Event listener for marking a task as completed
    tasksList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });
});
