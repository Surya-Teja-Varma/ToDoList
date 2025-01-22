// Select elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener for the add button
addBtn.addEventListener('click', addTodo);

// Function to add a new to-do item
function addTodo() {
    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Add task text
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => listItem.remove());
    listItem.appendChild(deleteBtn);

    // Add list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
}
