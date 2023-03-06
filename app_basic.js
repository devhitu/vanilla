let a = 10;
let b = 3;
let myName= "devhitu" //'let' is for Creation
myName = "devhitu Choi" //Changing don't need 'let' 
//'const' never be update variable

const amIfat = null;
let something; //undefined
//null은 메모리도 변수도 있지만 그 값이 없다
//undefined는 메모리는 있는데 값이 없는것


const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"]
daysOfweek.push("sun")

const toBuy = ['potato','tomato','pizza']
toBuy.push("kimbab")


const playerName = "devhitu"
const playerPoints = 1212
const playerPretty = true
const playerFat = "absolutely nope"
//name, points, pretty와 같은 property가 한개의 개체entity인 player을 꾸며주고있음

//array는 보기좋아보이진 않음
const playerArray = ["devhitu", 1212, false, "absolutely nope"]

//object
const player = {
    name: "devhitu",
    points: 90,
    pretty: true,
    sayHello2: function(name){
        console.log("hello! " + name + " nice to meet you!")
    }
}
player.pretty = false,
player.points = player.points + 12;

//player.sayHello2("lynn");

//function
//player에게 function을 주려면..?
function sayHello(nameOfPerson, age) {
    console.log('hello my name is ' + nameOfPerson +". and my age is " + age +"years old.")
}

console.log() //function을 실행시켜도 params를 보내지 않아서 아무 실행이 일어나지 않음

//() function을 play 시킴...ex. console.log(), alert()
// sayHello()
// sayHello("nico" ,34)
// sayHello(player.name, 27)

function plus(a,b) {
    console.log(a+b)
}
function devide(a,b) {
    console.log(a/b)
}

//왜 console.log를 하지않고 return을 하는걸까?
/* 
    return을 하는 궁극적인 이유 : 결과값을 화면에 보여줘야한다. return은 함수가 밖과 소통할 수 있게 해줌
    console.log는 그림의떡. 꺼내먹으려면 return 필요, 모든걸 다 console.log로 함수를 쓰진 않듯이..
*/
const calculator = {
    plus: function(a,b){
        return a+b;
        console.log('ddd') //return 후에는 절대 나오지 않아
    },
    minus: function(a,b){
        return a-b
    },
    divide: function(a,b){
        return a/b
    },
    times: function(a,b){
        return a*b
    },
    power: function(a,b){
        return a**b
    },
}

//calculator.divide(5,2)
const plusResult = calculator.plus(2,2) //5
const minusResult = calculator.minus(plusResult,10) //-5
const timesResult = calculator.times(2,minusResult) 
const divideResult = calculator.divide(timesResult, plusResult)
const powerResult = calculator.power(divideResult,minusResult)


function calculateKrAge(ageOfForeigner) {
    // return ageOfForeigner + 2;
    ageOfForeigner + 2;
}
//function을 변수에 할당하면 그 변수는 function '결과'의 type을 가지게 됨
const krAge = calculateKrAge(96); //krAge는 function의 return값이 됨
//console.log(krAge)

//conditionals
//const age = prompt("how old r u?") 
//console.log(typeof age) //type보는 법
parseInt() //string -> integer
isNaN() //number boolean, true면 strig

const age = parseInt(prompt("how old r u?")) //prompt에서 받은값이 parseInt에 적용
if(isNaN(age) || age < 0){
    console.log("Please write a real positive number")
}else if(age < 18){
    console.log("u r too young")
}else if(age >= 18 && age <= 50){
    console.log("u can drink")
}else if(age >= 50 && age <= 80){
    console.log("u should exercise")
}else{
    console.log("u can do whatever u want")
}
//내가 쓴 코드
/* if(!isNaN(age)){
    if(age<=20){
        alert('술먹지마')
    }else{
        alert('술먹어')
    }
    }else{
    alert('숫자를 써줘')
}*/