document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter a task");
    } else {
      const li = document.createElement("li");
      li.textContent = taskText;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove";
      delBtn.className = "remove-btn";
      delBtn.onclick = function () {
        taskList.removeChild(li);
      };

      li.appendChild(delBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
});
