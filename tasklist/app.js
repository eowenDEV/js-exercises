// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const newTask = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task event
  clearBtn.addEventListener("click", clearTasks);
}

// Add Task
function addTask(e) {
  if (newTask.value === "") {
    alert("Please type in a task to add");
  }

  //Create new li element
  const newLi = document.createElement("li");
  newLi.className = "collection-item";
  newLi.appendChild(document.createTextNode(newTask.value));

  //Create new link elment
  const newLink = document.createElement("a");
  newLink.className = "delete-item secondary-content";
  newLink.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link to li
  newLi.appendChild(newLink);

  //Append li to ul
  taskList.appendChild(newLi);

  //Clear input
  newTask.value = "";

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure you want to delete task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Task
function clearTasks() {
  console.log(taskList.firstChild);

  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
}
