const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const toDos = []; //local storage only save the text

function saveToDos() {
    localStorage.setItem("todos", toDos)
}

function deleteToDo(event){
    const li = event.target.parentElement; //this is the li we want to delete
    li.remove()

}


function paintToDo(newTodo){
  const li = document.createElement("li")
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button")
  button.innerText = "✖"
  button.addEventListener("click", deleteToDo)

  

  li.appendChild(span);  //append는 젤 뒤에 넣음
  li.appendChild(button);

  toDoList.appendChild(li)

}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();


}

toDoForm.addEventListener("submit", handleToDoSubmit)

