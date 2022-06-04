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
    
    console.log("hello");
}
