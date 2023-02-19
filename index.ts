// Define the task class
class Task {
    description: string;
    completed: boolean;
  
    constructor(description: string) {
      this.description = description;
      this.completed = false;
    }
  
    // Method to toggle the completed status of the task
    toggleCompleted() {
      this.completed = !this.completed;
    }
  }
  
  // Get the HTML elements
  const form = document.querySelector('form');
  const input = document.querySelector('#todo-input') as HTMLInputElement;
  const ul = document.querySelector('#todo-list');
  
  // Array to store the tasks
  let tasks: Task[] = [];
  
  // Function to render the task list
  function renderTasks() {
    ul.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
  
      li.innerText = task.description;
      li.classList.toggle('completed', task.completed);
  
      li.addEventListener('click', () => {
        task.toggleCompleted();
        renderTasks();
      });
  
      ul.appendChild(li);
    });
  }
  
  // Function to handle the form submission
  function handleFormSubmit(event: Event) {
    event.preventDefault();
  
    const task = new Task(input.value);
  
    tasks.push(task);
    input.value = '';
  
    renderTasks();
  }
  
  // Add event listener to the form submit button
  form.addEventListener('submit', handleFormSubmit);
  