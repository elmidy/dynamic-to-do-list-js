document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach((task) => {
        addTask(task);
      });
    }
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeTask(task, li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Add a new task
  function addTask() {
    const task = taskInput.value.trim();
    if (task) {
      tasks.push(task);
      addTaskToDOM(task);
      saveTasks();
      taskInput.value = "";
    }
  }

  // Remove a task
  function removeTask(task, liElement) {
    tasks = tasks.filter((t) => t !== task);
    taskList.removeChild(liElement);
    saveTasks();
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks();
});
