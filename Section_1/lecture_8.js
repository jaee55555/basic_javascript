//함수 호이스팅
connectStrings('study', 'hoisting');
function connectStrings(str1, str2){
    console.log(str1+str2);
}

//변수 호이스팅
// console.log(num1);
// let num1 = 123;
console.log(num2); //undefined
var num2 = 123;

//var는 변수를 생성한 다음, 메모리 공간에 변수의 공간을 미리 할당됨.
//let는 변수가 초기화될때까지 메모리 공간이 확보되지 않아서, Temporal Dead Zone(TDZ: 사용할 수 없는 공간)에 들어가버린다.
//그러므로, 되도록 let이나 const를 사용한다.
