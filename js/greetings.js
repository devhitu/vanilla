const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//변수로 해줘야 나중에 오타가 나도 js가 error창에서 알려줌
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//03. 환영인사
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME) //환영인사 텍스트 보여주기
    greeting.innerText = `Hello ${username}`; //text값 넣기
}

//02. user 정보기입
function onLoginSubmit(event) {
    event.preventDefault(); //submit를 그냥쓰면 새로고침이 되는데 해당 preventDefault을 사용함으로 기본적으로 실행되는 동작을 제어
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 가리기

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localstorage에 username저장
    paintGreetings(username) //submit한 input값으로 환영인사
}

//01.1. user 정보가 없을때
const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form 보여주기
    loginForm.addEventListener("submit", onLoginSubmit) //submit event
}
//01.2. user 정보가 있을때(새고해도 보여주기)
else{
    paintGreetings(savedUsername) //저장된 username으로 환영인사
}
