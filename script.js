document.addEventListener("DOMContentLoaded", function () {
  addTask();
});
document.addEventListener("DOMContentLoaded", function () {
    function loadTasks (){
        const storedTasks = JSON.parse(localStorage.getItem('task') || '[]')
    }
  const addButton = document.getElementById("add-task-btn");
  addButton.addEventListener("clicked", addTask);
  const taskInput = document.getElementById("task-input");
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
    } else {
      const li = document.createElement("li");
      li.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add = "remove-btn";
      removeButton.onclick = function () {
        li.remove();
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
});
