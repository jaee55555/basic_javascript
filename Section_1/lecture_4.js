//산술 연산자
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 % num2); //나머지 연산
console.log(num1 % 2);
console.log(num2 % 2);

console.log(num1++); //10
console.log(num1);   //11
console.log(++num1); //12

console.log(num1--); //12
console.log(num1);   //11
console.log(--num1); //10

console.log("========================")

//대입 연산자
let num = 10;
// num = num + 5;
num += 5;
console.log(num);

//비교 연산자
//일치
let num11 = 10;
let num22 = '10';
console.log(num11 === num22);
console.log(num11 == num22);
//불일치
console.log(num11 !== num22);
console.log(num11 != num22);

let a = 10;
let b = 20;
let c = 10;
console.log(a<b);
console.log(a>b);
console.log(b >= c);
console.log(a > c);

//연결 연산자
let price = 10000;
console.log("가격: "+price+"원");
console.log("========================")
//논리 연산자
// true false
// NOT OR AND

//NOT
let isClicked = true;
let isOpend = false;
console.log(!isClicked);
console.log(!isOpend);
//OR
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
//AND
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);


//Null 병합 연산자
// A ?? B
let num10;
let num20 = 10;
console.log(num10 ?? 20);
console.log(num20 ?? 20);

//삼항 연산자
// A ? B : C
let numm = 100;
let result = numm % 2 === 0 ? "짝수" : "홀수";
console.log(result);