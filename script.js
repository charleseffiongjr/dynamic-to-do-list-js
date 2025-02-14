// document.addEventListener("DOMContentLoaded", () => {
//     loadTasks();
// })
document.addEventListener("DOMContentLoaded", function () {
  addTask();
});

document.addEventListener("DOMContentLoaded", function () {
    // function loadTasks (){
    //     const storedTasks = JSON.parse(localStorage.getItem('task') || '[]')
    //     storedTasks.forEach(taskText => addTask(taskText, false));

    // }
    
  const addButton = document.getElementById("add-task-btn");
  addButton.addEventListener("clicked", addTask);
  const taskInput = document.getElementById("task-input");
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  const taskList = document.getElementById("task-list");

  function addTask() {
    // if (save && taskText) {
    //     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    //     storedTasks.push(taskText);
    //     localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save to localStorage
    //   }
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    // if (taskText === undefined) {  // If no taskText is passed, grab from input field
    //     taskText = taskInput.value.trim();
    //   }
    if (taskText === "") {
      alert("Please enter a task.");
    } else {
      //   storedTasks.forEach(taskText => { const li = document.createElement("li");
      // li.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      removeButton.classList.add = "remove-btn";
      removeButton.onclick = function () {
        li.remove();
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value = "";
    ;
    }
    
 
  }
  
});
