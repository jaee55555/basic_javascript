// function Counter (){
//     this.count = 0;
//     setInterval(function(){
//         this.count++;
//         console.log(this.count);
//     },2000);
// }
//NaN
//여기서 function()은 일반함수로 호출되어서,
//웹브라우저 전역 객체인 window에 접근하여 this를 바인딩한다.

function Counter (){
    this.count = 0;
    setInterval(()=>{
        this.count++;
        console.log(this.count);
    },2000);
}
//1
//2
//3
//화살표 함수는 함수가 어디에 선언되었는가에 따라 상위 스코프를 참조하기 때문에
//렉시컬 스코프에 따라 this.count에 접근한다.

const counter = new Counter();

const cafe = {
    brand: '이디야',
    menu: '아메리카노',
    print: ()=>{
        console.log(this);
    },
};

cafe.print(); //윈도우 객체에 접근