let arr = new Array();
console.log(arr);

let arr1 = new Array(1,2,3);
let arr2 = new Array(3);
console.log(arr1); //[1,2,3]
console.log(arr2); //[비어있음 * 3] 길이가 3인 빈 배열

let arr4 = [1,2,3];
let arr5 = [3];
console.log(arr4); //[1,2,3]
console.log(arr5); //[3]


let arr6 = [
{name: '홍길동'},
1,
'array',
function (){
    console.log('hello world!');
},
null,
undefined,
];
console.log(arr6)

let array = [1, 'hello', null];
console.log(array[0]); //index는 0부터
console.log(array[1]);
console.log(array[2]); //마지막 index는 총 길이-1 까지

let fruits = ['apple', 'orange', 'peach'];
fruits.push('grape'); //맨 마지막에 추가
fruits.unshift('melon'); //맨 앞에 추가
console.log(fruits);

const animal = ['cat', 'dpg', 'hamster'];
// animal = ['cat', 'rabbit', 'hamster'];
//배열은 객체임으로, 재할당을 하게되면 animal의 id값(배열 자체)이 바뀌는 것이기 때문에
//내용 수정을 하려면 index로 접근해서 하면 된다.
animal[2] = 'parrot'; //배열 자체를 변경하는 것이 아니기때문에 수정가능
console.log(animal);


const colors = ['purple', 'skyblue', 'green', 'yellow', 'orange'];
console.log(colors.length); //5
colors.shift(); //맨 앞 요소 삭제
console.log(colors.length); //4
// colors.splice(start, deleteCount); //start 인덱스부터 deletConut 개수만큼 삭제
colors.splice(1,3);
console.log(colors.length); //1
console.log(colors);

colors.pop(); //맨 뒷 요소 삭제
console.log(colors.length); //0