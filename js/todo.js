const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = []; //update가 가능하도록

//4. 입력값 저장
function saveTodos() {
    //localStrorage only saves "text", no "array"
    //array(string)로 저장할순없을까? JSON.stringify
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array 자체를 문자열로 만듦
}

//3. 삭제
function deleteTodo(event) {
    //console.dir(event.target.parentElement.innerText) //몇번째 li가 클릭된 건 지 알 수 있음
    const li = event.target.parentElement; //button 클릭 이벤트에서 해당 버튼의 부모 li 찾기
    li.remove(); //해당 button 삭제
}

//2. 입력값을 하위에 그리기
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



//5. 저장한 값을 배열로 나타내기
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedToDos = JSON.parse(savedTodos);
    console.log(parsedToDos) //array
    toDos = parsedToDos; //값을
    //parsedToDo가 갖고있는 각각에 대해 function을 실행시켜줘
    //따로 function을 빼서 쓰는 것 보단 arrow function을 쓰는게 간결함
    parsedToDos.forEach((item)=>console.log(item));
}

//따로 function을 빼서 썼을때..
/* function sayHello(item) {
     //지금 처리되고 있는 item 또한 그냥 제공해준다
     console.log('this is the turn of', item)
}*/
