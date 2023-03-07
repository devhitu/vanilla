const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

//4. todo 작성
function saveTodos(params) {
    //localStrorage only saves "text", no "array"
    //array(string)로 저장할순없을까? JSON.stringify
    localStorage.setItem("todos", JSON.stringify(toDos)); //array 자체를 문자열로 만듦

}

//3. todo 작성
function deleteTodo(event) {
    //console.dir(event.target.parentElement.innerText) //몇번째 li가 클릭된 건 지 알 수 있음
    const li = event.target.parentElement; //button 클릭 이벤트에서 해당 버튼의 부모 li 찾기
    li.remove(); //해당 button 삭제
}

//2. todo 작성
function paintToDo(newTodo) { 
    const li = document.createElement("li"); //tag 생성
    const span = document.createElement("span");
    span.innerText = newTodo; //span tag안에 입력값 넣기
    const button = document.createElement("button");
    button.innerText = "done"; 
    button.addEventListener("click", deleteTodo) //삭제버튼 클릭시 삭제함수작동
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

//1. todo 작성
function handleToDoSubmit(event) {
    //form은 submit 이벤트를 가짐. So, 기본적인 event를 막아야함
    event.preventDefault(); 
    const newTodo = toDoInput.value; //현재의 값 복사
    toDoInput.value =""; //enter시 사라지게
    //console.log(newTodo, toDoInput.value)
    toDos.push(newTodo); //입력값을 배열로 넣기
    saveTodos(); //입력값 저장하기
    paintToDo(newTodo); //입력값을 하위에 그리기
}

//0. 입력값에 submit 이벤트 실행시 함수 작동
toDoForm.addEventListener("submit",handleToDoSubmit)