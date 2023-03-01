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

player.sayHello2("lynn");

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


