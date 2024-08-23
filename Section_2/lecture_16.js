//구조 분해 할당
//배열이나 객체의 요소 및 프로퍼티들을 분해해,
//그 값들을 각각의 변수에 할당하는 js의 표현식

// let colors = ["green", "blue", "purple"];
// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];

// let [c1, c2, c3] = colors;

let c1, c2, c3, c4;//선언 분리 할당
[c1, c2, c3, c4="yellow"] = ["green", "blue", "purple"];
//여기서 c4는 '기본값 할당'이라고 부른다.

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4); //배열의 길이보디 더 많은 변수에 할당하면, undefined가 할당됨


//두개의 변수 값을 서로 바꾸기
//일반적인 방법
let a = 10;
let b = 5;
let temp ;
temp = a;
a = b;
b = temp;
console.log(a,b);
//구조분해할당으로 바꾸기
a = 10;
b = 5;
[a, b] = [b, a];
console.log(a,b);



//객체의 구조분해할당
let colors = {
    cc1: "green",
    cc2: "blue",
    cc3: "purple",
}

// let {cc1,cc2,cc3} = colors;
// let color1 = colors.cc1;
// let color2 = colors.cc2;
// let color3 = colors.cc3;
// let {cc1 : color1, cc2: color2, cc3: color3} = colors;
let {cc1, cc2, cc3, cc4 = "yellow"} = colors;
console.log(cc1);
console.log(cc2);
console.log(cc3);
console.log(cc4);
console.log(colors);