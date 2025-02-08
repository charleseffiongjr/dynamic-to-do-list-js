document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();
        if  (taskText === ""){
            alert('Please enter a task.');
        }

        const li = document.createElement('li');
        li.textContent = 'taskText';
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        classList.add = "remove-btn";
        removeButton.onclick = function () {
            li.remove();
        }
        li.appendChild('removeButton');
        taskList.appendChild('li');
        taskInput.value = "";

           
        
    

    }

})