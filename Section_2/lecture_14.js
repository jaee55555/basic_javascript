let arr = [1,2,3,4,5];
//for
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("=====================");


//forEach
arr.forEach((elm)=>{
    console.log(elm);
});
console.log("=====================");

arr.forEach((elm, idx)=>{
    console.log(`${idx}번째 요소는 ${elm}입니다.`);
});
console.log("=====================");

arr.forEach((elm, idx, array)=>{
    console.log(`${idx}번째 요소는 ${elm}입니다.`);
    console.log(array);
});
console.log("=====================");


//map 사용하기
let newArray = arr.map((elm)=>{
    return elm * 10;
});
// for(let i = 0; i<arr.length;i++){
//     newArray.push(arr[i]* 10);
// }
console.log(newArray);
console.log("=====================");

//배열에서 특정 요소 찾는 함수
let colors = ['green', 'blue', 'purple'];
console.log(colors[2]);
console.log(colors.at(-2)); //배열의 index를 뒤에서부터 minus 값으로 넘겨줄 수 있는 내장함수
console.log(colors.includes("blue"));   //해당 요소를 포함하고 있는지? true
console.log(colors.includes("yellow")); //해당 요소를 포함하고 있는지? false

console.log(colors.includes("blue", 2)); //해당 요소를 2번째부터 포함하고 있는지? false
console.log(colors.includes("blue", 1)); //해당 요소를 1번째부터 포함하고 있는지? true

console.log(colors.indexOf("purple")); //해당 요소가 몇번째에 위치하고 있는지? 2
console.log(colors.indexOf("yellow")); //해당 요소가 몇번째에 위치하고 있는지? -1 ==> 없다는 뜻
console.log("=====================");

//배열의 요소가 객체로 이뤄져있을 때 특정 요소를 찾는 함수
let colorss=[
    {id:1, color:"green"},
    {id:2, color:"blue"},
    {id:3, color:"purple"},
    {id:4, color:"yellow"},
];
let idx = colorss.findIndex((elm) => elm.color === "purple");
console.log(idx); //해당 요소가 '2'번째에 있다.
console.log("=====================");

colorss.findIndex((elm, idx, array) => 
    console.log(`${idx}번째 값은 id: ${elm.id}, color: ${elm.color}`)
);
colorss.findIndex((elm, idx, array)=> console.log(array));
console.log("=====================");


let ind = colorss.find((elm)=> elm.color === "purple");
//주어진 조건에 해당하는 첫번째 요소의 값을 반환
//만약 해당 요소가 없으면, undefined을 반환
console.log(ind);
console.log("=====================");


let filterArray = colorss.filter((elm, idx, array) => elm.id > 1);
//조건을 만족하는 모든 값을 새로운 배열에 담아서 반환하는 함수
console.log(filterArray);
console.log("=====================");

let sliceArray = colorss.slice(1,3);
//배열을 잘라서 새로운 배열에 담아 반환하는 함수
//Begin부터 End-1번째 요소까지의 요소를 복사해서 새로운 배열에 담아 반환
console.log(sliceArray);
console.log("=====================");