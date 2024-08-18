let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

//concat
console.log(array1.concat(array2));

//join
let array3 = ["green", "blue","purple", "yellow"];
console.log(array3.join());
console.log(array3.join(" "));

//sort
let colors = ["green", "blue","purple"];
colors.sort();
console.log(colors);

//compare
const compare1 = (a,b) =>{
    if(a>b) return -1;
    else if(a<b) return 1;
    else return 0;
}
colors.sort(compare1);
console.log(colors);

const compare2 = (a,b) => {
    return b - a; //내림차순 정렬
}
let numbers = [1,100,25,50,120,3];
numbers.sort(compare2);
console.log(numbers);


//reduce: 배열의 모든 요소에 대해 확인하고 누적된 값을 출력하고 싶을때 사용
numbers = [1,100,25,50];
let sum = numbers.reduce((acc,cur,idx)=>{
    //acc = 누적값
    //cur = 현재 처리할 요소
    //idx = 현재 index

    console.log(acc, cur, idx);
    return acc + cur;
},10); //10은 초기 누적값의 시작값
console.log(sum);

//isArray: 전달된 매개변수가 배열인지 아닌지 판단
let a = Array.isArray([1,100,50]); //true
let b = Array.isArray({id: 1, color: "green"}); //false
let c = Array.isArray("string"); //false
let d = Array.isArray(undefined); //false

console.log(a,b,c,d);