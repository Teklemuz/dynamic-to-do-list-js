document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the value of the task input
        let taskText = taskInput.value.trim();

        // If taskText is not empty
        if (taskText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const remove = document.createElement('button');
            remove.textContent = 'Remove';
            remove.className = 'remove-btn';
            remove.addEventListener('onclick', function() {
                li.remove();
            });

            // Append remove button to list item
            li.appendChild(remove-btn);

            // Append list item to task list
            taskList.appendChild(li);

            // Clear the task input
            taskInput.value = '';
        } else {
            // Alert user if task input is empty
            alert('Please enter a task.');
        }
    }

    // Event listener for Add Task button
    addButton.addEventListener('onclick', addTask);

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Initial invocation of addTask on page load
    addTask();
});

