const quoteInput = document.getElementById('quote-text')
const authorInput = document.getElementById('quote-author')
const addButton = document.getElementById('add-quote-button')
const quoteDisplay = document.getElementById('quote-display')

addButton.addEventListener('click', addQuote)

function addQuote ()  {
    const quoteText = quoteInput.value.trim();
    const authorText = authorInput.value.trim();

    if (quoteText !=="" && authorText !==""){
        const quoteObject = {
            text: quoteText,
            author: authorText
        };

        const quoteJSON = JSON.stringify(quoteObject);

        const uniqueKey = `quote-${Date.now()}`;

        localStorage.setItem(uniqueKey, quoteJSON);

        displayQuote(quoteObject, uniqueKey);

             quoteInput.value = "";
             authorInput.value = "";
    } else {
        alert("Please enter both a quote and an author.");
    }
}


    // function displayQuote(quoteObject, key) {
    //     const quoteItem = document.createElement("div");
    //     quoteItem.classList.add("quote-item");
    
    //     // Add content to the quote item with a remove button
    //     quoteItem.innerHTML = `
    //         <p>"${quoteObject.text}"</p>
    //         <p class="author">- ${quoteObject.author}</p>
    //         <button class="remove-quote" data-key="${key}">Remove</button>
    //     `;
    
    //     // Add event listener to the Remove button
    //     const removeButton = quoteItem.querySelector(".remove-quote");
    //     removeButton.addEventListener("click", function(event) {

    //         const keyToRemove = event.target.dataset.key;
    //         removeQuote(keyToRemove);
    //     });
    
    //     quoteDisplay.appendChild(quoteItem);
    // }

    function displayQuote(quoteObject, key) {
        const quoteItem = document.createElement("div");
        quoteItem.classList.add("quote-item");
    
        quoteItem.innerHTML = `
            <p class="quote-text">"${quoteObject.text}"</p>
            <p class="author">- ${quoteObject.author}</p>
            <button class="edit-quote" data-key="${key}">Edit</button>
            <button class="remove-quote" data-key="${key}">Remove</button>
        `;
    
        // Edit functionality
        quoteItem.querySelector(".edit-quote").addEventListener("click", function() {
            const newText = prompt("Edit the quote:", quoteObject.text);
            const newAuthor = prompt("Edit the author:", quoteObject.author);
    
            if (newText !== null && newAuthor !== null) {
                const updatedQuote = {
                    text: newText,
                    author: newAuthor
                };
                localStorage.setItem(key, JSON.stringify(updatedQuote));
                loadQuotes();
            }
        });
    
        // Confirmation before removing a quote
        quoteItem.querySelector(".remove-quote").addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this quote?")) {
                removeQuote(key);
            }
        });
    
        quoteDisplay.appendChild(quoteItem);
    }

    
    function loadQuotes() {
        quoteDisplay.innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key.startsWith("quote-")) {
                const quoteJSON = localStorage.getItem(key);
                const quoteObject = JSON.parse(quoteJSON);
    
        
                displayQuote(quoteObject, key);
            }
        }
    }

    function removeQuote(key){
        localStorage.removeItem(key);
        loadQuotes();
    }
    window.addEventListener("load", loadQuotes);

