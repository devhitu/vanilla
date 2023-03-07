const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

//localStrorage only saves "text", no "array"
function saveTodos(params) {
    //array(string)로 저장할순없을까? JSON.stringify
    localStorage.setItem("todos", JSON.stringify(toDos)); //array 자체를 문자열로 만듦

}

function deleteTodo(event) {
    //console.dir(event.target.parentElement.innerText) //몇번째 li가 클릭된건지 알수있음
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "done";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    //form은 submit 이벤트를 가짐 기본적인 event를 막아야함
    event.preventDefault(); 
    const newTodo = toDoInput.value; //현재의 값 복사
    toDoInput.value =""; //enter시 사라지게
    //console.log(newTodo, toDoInput.value)
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}
toDoForm.addEventListener("submit",handleToDoSubmit)