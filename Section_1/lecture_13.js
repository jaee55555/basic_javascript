for(let i = 1; i < 6; i++){
    console.log(i);
}
//1
//2
//3
//4
//5
console.log("=====================");
for(let i = 5; i >0; i--){
    console.log(i);
}
//5
//4
//3
//2
//1
console.log("=====================");
let i = 1;
while(i<6){
    console.log(i);
    i++;
}
console.log("=====================");
i = 5;
while(i>0){
    console.log(i--);
    // i--;
}
console.log("=====================");

//배열 접근
let arr = [1,2,3,4,5];
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log("=====================");

//객체의 프로퍼티 접근
let person = {
    name: '홍길동',
    age: 25,
    height: 100,
};
console.log(Object.keys(person));
let newArray1 = Object.keys(person);
for(let i = 0; i<newArray1.length;i++){
    let nowKey = newArray1[i]; //key
    console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

console.log(Object.values(person));
let newArray2 = Object.values(person);
for(let i = 0; i<newArray2.length;i++){
    console.log(`value: ${newArray2[i]}`);
}

console.log(Object.entries(person));
let newArray3 = Object.entries(person);
for(let i = 0; i<newArray3.length;i++){
    console.log(`key: ${newArray3[i][0]}, value: ${newArray3[i][1]}`);
}

console.log("=====================");

let arr0 = [1,2,3,4,5];
for(let i of arr){
    console.log(i);
}

let person0 = {
    name: '홍길동',
    age: 25,
    height: 100,
};
for(let key in person){
    console.log(`key: ${key}, value: ${person0[key]}`);
}