const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Array para almacenar las tareas
let tasks = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  if (input.value.trim() === "") return;

  // Añadir la nueva tarea al array
  tasks.push({
    text: input.value,
    completed: false,
  });

  renderTasks();
  input.value = "";
}

function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span>${task.text}</span>
                <button class="delete-button">Delete</button>
            `;

    li.querySelector("input").addEventListener("change", function () {
      toggleTaskCompleted(index);
    });

    li.querySelector(".delete-button").addEventListener("click", function () {
      deleteTask(index);
    });

    todoList.appendChild(li);
  });
}

function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
