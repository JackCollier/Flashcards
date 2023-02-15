// Variable assignment using queryselector for performance
const flashcards = document.querySelector('.flashcards');
const createBox = document.querySelector('.create-box');
const question = document.querySelector('#question');
const answer = document.querySelector('#answer');

// Retrieves content from local storage, if none initializes an empty array, JSON.parse converts string data to object which will allow us to manipulate and display the content
let contentArray = JSON.parse(localStorage.getItem('items')) || [];

// Calls divMaker on each item of the array, this creates a div for each flashcard
contentArray.forEach(divMaker)

// Creates a new div element for each flashcard, based on a given text argument.
function divMaker(text) {
    let div = document.createElement("div");
    let h2_question = document.createElement("h2");
    let h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px;");

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style", "text-align: center; display: none; color:red;");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == 'none') {
            h2_answer.style.display = 'block';
        } else {
            h2_answer.style.display = 'none'
        }
    })

    flashcards.appendChild(div)
}

/* Creates a new flashcard object based on the values in the question and answer input fields. The function adds the flashcard object to the contentArray array,
 saves the updated array to local storage, creates a new div element for the flashcard, and clears the input fields. */ 
function addFlashCard() {
    let flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value
    }

    contentArray.push(flashcard_info)
    // Converts the JavaScript object into a string that can be stored in the local storage.
    localStorage.setItem('items', JSON.stringify(contentArray))
    // Creates an element for the new flashcard and appends it to the DOM.
    divMaker(contentArray[contentArray.length - 1])
    question.value = '';
    answer.value = '';
}


// Clears all flashcards from the flashcards container, clears the contentArray array, and removes all items from the local storage.
function delFlashCards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}


function showCreateCardBox() {
    createBox.style.display = 'block';
}


function hideCreateBox() {
    createBox.style.display = 'none';
}


