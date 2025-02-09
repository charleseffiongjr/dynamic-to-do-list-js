document.addEventListener("DOMContentLoaded", function(){
    addTask();
})
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
        addButton.addEventListener('clicked', addTask);
    const taskInput = document.getElementById("task-input");
        taskInput.addEventListener('keypress', function (event) {
        if (event.key ==="Enter"){
            addTask();
        };
    });
    const taskList = document.getElementById("task-list");

    function addTask(){
        const taskInput = document.getElementById('task-input')
        const taskText = taskInput.value.trim()
        if  (taskText === ""){
            alert('Please enter a task.')
        } else {
            const li = document.createElement('li')
            li.textContent = taskText;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className.add = 'remove-btn';
            removeButton.onclick = function () {
                li.remove(); 
            };
   
            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';

    }
        

    

    }
        
      
})