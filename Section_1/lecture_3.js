//typeof
// let num = 10;
// console.log(typeof num);

//원시형 타입
//Primitive data type

//숫자형
// let num1 = 125;
// let num2 = 10.000012;
// console.log(num1);
// console.log(num2);

let num = Infinity;
num = 100 / 0;
console.log(num); //Infinity
console.log(typeof num); //num

let number = NaN;
console.log(typeof number);

let number1 = 'javascript' / 10;
console.log(number1); //NaN ==> Not a Number

//BigInt
let bigNum1 = 99999999999999999999999999999n;
let bigNum2 = BigInt("99999999999999999999999999999");
console.log(typeof bigNum1); //bigint
console.log(typeof bigNum2); //bigint

//string
// let name = "younjae";
let name = 'younjae';
//템플릿 리터럴
let intro = `제 이름은 ${name}입니다.`;
console.log(typeof intro);

//boolean
//true / false
let isClicked = false;
if (isClicked){
    console.log('클릭 O');
}else{
    console.log('클릭 X');
}

//Null
//존재X, 알 수 없는 값
let nnum = null;
console.log(nnum === null);

//Undefined
//변수에 값이 할당되지 않은 상태
let nu;
console.log(typeof nu);

//동적 타입 언어
let Num = '100';
console.log(typeof Num);
Num = 10;
console.log(typeof Num);

//묵시적 형 변환
//자료형이 자동으로 변환한 것
// let num1 = '15';
// let num2 = 5;
// console.log(num1/num2); // 3

//명시적 형 변환
//의도적으로 자료형을 변환시킨 것
let num1 = '15';
let num2 = 5;
console.log(num1 + num2); //155
console.log(parseInt(num1)+num2); //20

