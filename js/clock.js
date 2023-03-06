const clock = document.querySelector("#clock");

/*
    https://velog.io/@suld2495/padStart%EC%99%80-padEnd-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

    'pad'는 좌우에 특정한 문자열로 채우는 기능
    첫번째 파라미터인 maxLength를 받아 문자열의 길이가 maxLength보다 작을 경우 나머지를 특정한 문자열로 채워주는 기능

    String.prototype.padStart(maxLength, ?fillString);
    String.prototype.padEnd(maxLength, ?fillString);
*/

function getClock() {
    const date = new Date(); //date object 생성
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`
}
getClock()
setInterval(getClock,1000);

