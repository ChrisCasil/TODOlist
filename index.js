// Define the task class
var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.completed = false;
    }
    // Method to toggle the completed status of the task
    Task.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };
    return Task;
}());
// Get the HTML elements
var form = document.querySelector('form');
var input = document.querySelector('#todo-input');
var ul = document.querySelector('#todo-list');
// Array to store the tasks
var tasks = [];
// Function to render the task list
function renderTasks() {
    ul.innerHTML = '';
    tasks.forEach(function (task, index) {
        var li = document.createElement('li');
        li.innerText = task.description;
        li.classList.toggle('completed', task.completed);
        li.addEventListener('click', function () {
            task.toggleCompleted();
            renderTasks();
        });
        ul.appendChild(li);
    });
}
// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var task = new Task(input.value);
    tasks.push(task);
    input.value = '';
    renderTasks();
}
// Add event listener to the form submit button
form.addEventListener('submit', handleFormSubmit);
