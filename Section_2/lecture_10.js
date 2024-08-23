//생성자 함수, 리터럴
let obj1 = new Object();
console.log(obj1);

let obj2 = {};
console.log(obj2);


//key value
let book={
    title: '자바스크립트 첫걸음',
    author: '김효빈',
    category: '자바스크립트',
    year: undefined,
    color: function(){
        console.log('orange');
    }
};


let car={
    name: '붕붕',
    model: 'morning',
    color: 'black',
};
console.log(car.name);
console.log(car.model);
console.log(car.color);
console.log(car['name']);
console.log(car['model']);
console.log(car['color']);

const getValue = (key) => {
    console.log(car[key]);
};
getValue('color');


const cat = {
    age:2,
    name: '야옹이',
    color: 'white',
};

cat.name = '옹이';
cat['color'] = 'yellow';
// cat = {
//     age:3,
// }; //에러
//객체는 const로 선언해도 해당 객체의 고유 id를 변경하는 것이 아니라면, 프로퍼티들은 변경가능하다.
//하지만 객체 자체의 고유 id(재할당?)를 변경하는 경우는 에러가 발생한다.
delete cat.color;
delete cat['age'];
console.log(cat);


const person = {
    name: '홍길동',
    age: 23,
    print: function(){ 
        //객체 내에서 메서드를 생성할때는 function 키워드를 사용하는 것이 좋다.
        //화살표 함수를 사용하게 되면, 화살표 함수 내부의 this 키워드는 객체를 가르키지 못하고, 윈도우 객체를 가르키기 때문!
        console.log(`제 이름은 ${this.name}입니다.`);
    },
};
person.print();
person['print']();