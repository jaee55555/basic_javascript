//함수 function
function add(num1, num2){
    // return console.log(num1+num2);
    return num1 + num2;
    console.log('함수 호출');
}

let result = add(10, 15);
console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);


//Early return pattern
// function compare(num){
//     if(num===0){
//         console.log("num의 값이 0입니다.");
//     }else if(num < 0){
//         console.log("num의 값이 0보다 작습니다.");
//     }else{
//         if(num>=10){
//             console.log("num의 값이 10보다 크거나 같습니다.");
//         }else{
//             console.log("num의 값이 0보다 크고 10보다 작습니다.");
//         }
//     }
// }
function compare(num){
    if(num===0){
        return ("num의 값이 0입니다.");
    } 
    if(num < 0){
        return ("num의 값이 0보다 작습니다.");
    }
    if(num>=10){
        return ("num의 값이 10보다 크거나 같습니다.");
    }
    return("num의 값이 0보다 크고 10보다 작습니다.");
}
console.log(compare(15));


function print(){
    console.log(1);
    console.log(2);
}
console.log(3);

console.log(4);
print();