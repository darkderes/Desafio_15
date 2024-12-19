const button = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Array para almacenar las tareas
let tasks = [
  {
    id: 1,
    text: "Aprender JavaScript",
    completed: false,
  },
  {
    id: 2,
    text: "Aprender CSS",
    completed: true,
  },
  {
    id: 3,
    text: "Aprender HTML",
    completed: false,
  },
];

// Renderizar las tareas al cargar la página

button.addEventListener("click", () => {
  addTodo();
});

const addTodo = () => {
  if (input.value.trim() === "") return;

  tasks.push({
    id: getLastIndex() + 1,
    text: input.value,
    completed: false,
  });

  renderTasks();
  input.value = "";
};

const renderTasks = () => {
  todoList.innerHTML = tasks
    .map(
      (task) =>
        `
  <li>
    <input type="checkbox" ${
      task.completed ? "checked" : ""
    } onchange="toggleTaskCompleted(${task.id})">&nbsp
    <label>${task.id}</label>&nbsp
    <span  style="text-decoration: ${
      task.completed ? "line-through" : "none"
    };">${task.text}</span>
    <button class=delete-button onClick='deleteTask(${
      task.id
    })'>Eliminar</button>
  
  </li> `
    )
    .join("");

  // Actualizar los conteos
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  document.getElementById("total-tasks").innerHTML = totalTasks;
  document.getElementById("completed-tasks").innerHTML = completedTasks;
};

const toggleTaskCompleted = (id) => {
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  renderTasks();
};

const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  renderTasks();
};
//funcion que em devuelva el ultimo index ingresado
const getLastIndex = () => {
  if (tasks.length === 0) return 0;
  return tasks[tasks.length - 1].id;
};
renderTasks();
