// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);
//add event listener to content

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
    //add todo to local storage
    saveLocalTodos(todoInput.value);
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

function deleteCheck(event){
    console.log(event.target)
    const item = event.target;

    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement; /*it's equal to the parent element search up this tag */
        //add animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }
 //check mark
 if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement; /*it's equal to the parent element search up this tag */
    todo.classList.toggle("completed"); /*adding a class ton use  */
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    console.log(event.target.value)
    todos.forEach(function(todo){
        const myStyle = todo.style;
        /*you will have access to each individual todo */
        if(myStyle != undefined && myStyle !=null ){
            switch(event.target.value){
                case "all":
                    /*if we click on all we want to show all the todos */
                    myStyle.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        //show me the classes that only have completed
                        myStyle.display = "flex";
                    }else{
                        myStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                    //show me the classes that only have completed
                        myStyle.display = "flex";
                    }else{
                        myStyle.display = "none";
                    }
                    break;
            }
        }
    });
    console.log(todos);
}

function saveLocalTodos(todo){
    //check if already in local storagr
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    //localStorage.clear();
}

function getTodos(){
     //check if already in local storagr
     let todos;
     if(localStorage.getItem("todos")=== null){
         todos = [];
     }else{
         todos = JSON.parse(localStorage.getItem("todos"));
     }
     todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(todos));
     todos.forEach(function(todo){
             //todo div
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo"); // add the class to the element
            //create li
            const newTodo = document.createElement("li");
            newTodo.innerText = todo;
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
     });

}

function removeLocalTodos(todo){
    //check if already in local storagr
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.todoIndexOf(todoIndex),1);
    //first what postition to remove arg and sec arg how many
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.clear(0);
}