//함수 선언식
//function 키워드 옆에 함수의 이름 작성
function func(){
    console.log('hello javascript');
}

//함수 표현식
//변수에 함수를 마치 하나의 값처럼 할당
const func1 = () =>{
    console.log('hello javascript');
}
const func2 = function (){
    console.log('hello javascript');
}
//func1과 func2는 똑같이 동작

////////////////////////////////////////
//함수 선언식의 호이스팅
hoisted1();
function hoisted1(){
    console.log("hoisting");
}//hoisting


//함수 표현식의 호이스팅(불가능)
// hoisted2(); //에러
const hoisted2 = function(){
    console.log('hoisting');
}
//변수함수가 TDZ에 들어가버리기 때문에, 호이스팅 발생 X
//따라서 사용불가


const add1 = function(a,b){
    return a + b;
}
const add2 = (a,b)=>{
    return a + b;
}
const add3 = (a,b)=> a + b;
console.log(add1(10,20));
console.log(add2(10,20));
console.log(add3(10,20));


//콜백 함수
const calculate = (a,b, callback)=>{
    let result = a+b;
    callback(result);
}
const printResult = (result) => {
    console.log('결과: '+ result);
}
const doubleResult = (result) => {
    console.log('결과에 2를 곱한 값: '+ result*2);
}
calculate(5,3, printResult);
calculate(5,3, doubleResult);

const testFunc = (callback)=>{
    callback();
}

testFunc(()=>{
    console.log('콜백 함수 테스트');
})
testFunc(function (){
    console.log('콜백 함수 테스트');
})