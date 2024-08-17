// 전역, 지역
let globalNum = 100;

function testFunc(){
    let innerNum = 50;
    console.log(globalNum);
    console.log(innerNum);
}
testFunc();
console.log(globalNum);
// console.log(innerNum); //에러 발생

///////////////////////////////
let global = "나는 전역 변수입니다.";

function outerFunction(){
    let outer = "나는 외부 함수의 변수입니다."
    
    function innerFunction(){
        let inner = "나는 내부 함수의 변수입니다."
        console.log(global);
        console.log(outer);
        console.log(inner);
    }
    innerFunction();
    console.log(global);
    console.log(outer);
    // console.log(inner); //에러 발생
}

outerFunction();


//////////////////////////////////
//함수 스코프, 블록 스코프

function print(){
    // for(let i=0; i<10;i++){ //let은 블록 스코프
    //     console.log(i);
    // }
    // console.log(i); //에러 발생
    for(var i=0; i<10;i++){ //var는 함수 스코프
        console.log(i);
    }
    console.log(i); //에러 없음
}
print();

// let num = 10;
// let num = 10; //에러
//let은 블록 스코프라서, 
//블록 내부에서 같은 이름의 변수를 재 선언하려고 할때에는 에러를 발생시키기 때문에
//신뢰성과 예측 가능성을 높인다.

var num = 10;
var num = 10; //에러 없음
//var는 함수 스코프라서 어디서 어떻게 사용되고 있는 지 파악하기 어렵고
//프로그램 상의 오류를 발생시킬 수 있게 된다. ==> 단점
console.log(num);