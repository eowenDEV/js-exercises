/*
  udemy course Modern JavaScript From The Beginning   
*/

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const newTask = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', loadTasks);

  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Load DOM Tasks
function loadTasks() {
  // If DOM has tasks, load. if not, set to empty
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    newTaskElement(task);
  });
}

// Create/Add new task element
function newTaskElement(newTaskValue) {
  // Create new li element
  const newLi = document.createElement('li');
  newLi.className = 'collection-item';
  newLi.appendChild(document.createTextNode(newTaskValue));

  // Create new link elment
  const newLink = document.createElement('a');
  newLink.className = 'delete-item secondary-content';
  newLink.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link to li
  newLi.appendChild(newLink);

  // Append li to ul
  taskList.appendChild(newLi);
}

// Add Task
function addTask(e) {
  if (newTask.value === '') {
    alert('Please type in a task to add');
  }

  newTaskElement(newTask.value);

  // Store in local storage
  storeTaskinLocalStorage(newTask.value);

  // Clear input
  newTask.value = '';

  e.preventDefault();
}

function storeTaskinLocalStorage(newTask) {
  // Check local storage for tasks
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure you want to delete task?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from Local Storage
function removeTaskFromLocalStorage(taskItem) {
  // Check local storage for tasks
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // If local storage task matches flagged task, remove from array
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  // Update local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }

  // Clear from local storage
  clearTasksFromLocalStorage();
}

// Clear from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  const taskItems = document.querySelectorAll('.collection-item');
  console.log(taskItems);

  taskItems.forEach(function(task) {
    const item = task.firstChild.textContent;
    console.log('Start Filter');
    if (item.toLowerCase().indexOf(text) != -1) {
      //console.log(`FOUND ${text} within ${item}`);
      task.style.display = 'block';
    } else {
      //console.log(`NO MATCH ${text} within ${item}`);
      task.style.display = 'none';
    }
  });
}
