//spread
//1. object
const toy = {
    type: "bear",
    price: 15000
};


const yellowToy = {
    ...toy,
    color: "yellow"
};

console.log(toy);
console.log(yellowToy);
//2. array
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];
const rainbow = [...color1, "green", ...color2];
console.log(rainbow);

//rest
const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
};

// const {type, price, color} = blueToy;
// const {type, ...rest} = blueToy;
// console.log(type);
// console.log(rest);

const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;
console.log(c1, c2);
console.log(rest);

const print1 = (a,b, ...rest) =>{
    // console.log([c,d,e,f]);
    console.log(a,b,rest);
};
print1(1,2,3,4,5,6);
//함수에서 rest를 사용하게되면, 함수에서 받아온 변수들을 배열로 받아옴


//spread
const print2=(a,b,c,d,e,f) => {
    console.log(a,b,c,d,e,f);
};
const numbers= [1,2,3,4,5,6];
print2(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5]);
print2(...numbers);

//rest
const print3=(...rest) => {
    console.log(rest);
};
// print2(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5]);
print2(...numbers);