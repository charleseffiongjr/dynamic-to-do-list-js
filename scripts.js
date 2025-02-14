function addItem(){
    const inputField = document.getElementById('input-text');
    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });
    const inputValue = inputField.value.trim(); 

    if (inputValue !==""){
        const newItem = document.createElement('li')
        newItem.textContent = inputValue;

        const listContainer = document.getElementById('list-container')
        listContainer.appendChild(newItem)

        inputField.value = ""
    }
}



const addbutton = document.getElementById('add-button')
    addbutton.addEventListener('click', addItem)
   