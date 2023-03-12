//https://home.openweathermap.org/api_keys
//내 api 키 값
const APT_KEY = "900da5583e292ae394abe2a5ccb2d013";

function onGeonOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APT_KEY}&units=metric`
    //url 요청 ...f12 network 탭에서 확인 가능
    //fetch는 promise이고 당장 일어나지않고 시간이 좀 걸림
    fetch(url).then(response => response.json()).then(data => {
        //console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    }); 
}
function onGeonError(params) {
    alert("Can't Find You. No weather for you.")
    
}
navigator.geolocation.getCurrentPosition(onGeonOk,onGeonError);

