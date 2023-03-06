const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let imagesLength = images.length;

let randomImgNum = Math.ceil(Math.random() * imagesLength); //1~7 올림

//create HTML
const bgImge = document.createElement("img"); //img 태그생성
bgImge.src =`img/${randomImgNum}.jpg`; //img경로 넣기
document.body.appendChild(bgImge); //body에 이미지 넣기