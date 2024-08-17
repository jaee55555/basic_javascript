//생성자 함수
//new 라는 키워드 사용


//일반적인 객체 생성시
const person1 = {
    name:'홍길동',
    age: 30,
};
const person2 = {
    name:'김철수',
    age: 25,
};
console.log(person1.name, person1.age);
console.log(person2.name, person2.age);

//생성자 함수 사용시
function Person(name, age){
    this.name = name;
    this.age = age;
}
const p1 = new Person('신데렐라', 20);
const p2 = new Person('백설공주', 22);
console.log(p1.name, p1.age);
console.log(p2.name, p2.age);

//동일한 구조의 객체를 쉽게 생성
//코드의 재사용성 높아짐
//반복되는 코드 작성 감소