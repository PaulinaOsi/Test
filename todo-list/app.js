// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);

//functions

function addTodo(event){
    // prevent the form from submitting 
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // add the class to the element
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //checkmark  button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =`<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    console.log("hello");
     //trash  button
     const trashButton = document.createElement("button");
     trashButton.innerHTML =`<i class="fas fa-trash"></i>`;
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    //append to list 
    todoList.appendChild(todoDiv)
    //clear todo input value 
    todoInput.value = "";
   
}
