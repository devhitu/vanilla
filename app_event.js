const h1 = document.querySelector(".hello h1")

console.dir(h1)

function handleTitle() {
    h1.style.color = "red"
}
function handleMouseEnter() {
    h1.style.color = "red"
}
function handleMouseLeave() {
    h1.style.color = "blue"
}
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor = '';
    if(currentColor === "blue"){
        newColor="tomato"   
    }else{
        newColor = "blue"
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);



//곧바로 실행하지 않기위해 ()를 넣지않음
// h1.addEventListener("click", handleTitle);
// h1.addEventListener("mouseenter",handleMouseEnter)
// h1.addEventListener("mouseleave",handleMouseLeave)

//이렇게도 할수 있지만 addEventListener은 removeEventListener 사용할수있어서 비선호
//title.onClick = handleleTitle;
//title.onmouseenter = handleMouseEnter;

function handleWindowResize() {
    document.body.style.backgroundColor = "gold"
}
function handleWindowCopy() {
    document.body.style.backgroundColor = "red"
}
function handleWindowOffline(params) {
    alert("sos")
}
function handleWindowOnline(params) {
    alert("all good")
}
// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy",handleWindowCopy )
// window.addEventListener("offline",handleWindowOffline )
// window.addEventListener("online",handleWindowOnline )

