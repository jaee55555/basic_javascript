//생성자 --> 새로운 객체 생성 / new 키워드

function Cafe(menu){
    console.log(this);
    this.menu = menu;
}

// let myCafe = new Cafe('latte');
let myCafe = Cafe('latte'); //일반 함수로 호출
console.log(myCafe);


//콜백함수
const cafe ={
    brand: '이디야',
    menu: "",
    setMenu: function(menu){
        this.menu = menu;
    }
}

function getMenu(menu, callback){
    callback(menu);
}

getMenu('핫초코', cafe.setMenu); //''
console.log(cafe);
console.log(window.menu); //핫초코

