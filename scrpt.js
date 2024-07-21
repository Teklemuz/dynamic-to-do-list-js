document.addEventListener('DOMContentLoaded', function() {
    //Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //loading tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Creating the addtask function
    function addTask(taskText, save = true) {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Creating remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function() {
            li.remove();
            removeTaskFromLocalStorage(taskText);
        });

        // Appending the remove button to list element
        li.appendChild(removeButton);

        // Appending list item to task list
        taskList.appendChild(li);

        // Task creation logic remains the same
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // removing task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', function() {
        addTask(taskInput.value.trim());
        taskInput.value = ''; // Clear input field after adding task
    });

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
            taskInput.value = ''; // Clear input field after adding task
        }
    });

    // Invoking of loadTasks on page load
    loadTasks();
});
