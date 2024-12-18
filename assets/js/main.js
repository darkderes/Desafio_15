const button = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Array para almacenar las tareas
let tasks = [];


button.addEventListener("click",  ()=> {
  addTodo();
});

const addTodo = () => {
  if (input.value.trim() === "") return;

  // Añadir la nueva tarea al array
  tasks.push({
    id: Date.now(),
    text: input.value,
    completed: false,
  });

  renderTasks();
  input.value = "";
}

const renderTasks = () => {
  todoList.innerHTML =  tasks.map((task) => 
  `
  <li>
    <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompleted(${task.id})">
    <span  style="text-decoration: ${task.completed ? "line-through" : "none"};">${task.text}</span>
    <button class=delete-button onClick='deleteTask(${task.id})'>Eliminar</button>
  
  </li> `).join("");


}


const toggleTaskCompleted = (id) => {
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  renderTasks();
}

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  renderTasks();
}
