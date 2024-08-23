//전역공간

// console.log(this); //window 출력
function func(){
    console.log(this); //window 출력
}
func();

//메서즈 => 객체 프로퍼티 함수

const cafe ={
    brand:'이디야',
    menu: '아메리카노',
    print:function(){
        console.log(this);
    },

    // newCafe:{
    //     brand: '이디야',
    //     menu: '라떼',
    //     print: function(){
    //         console.log(this);
    //     }
    // }
};

// cafe.print(); //이디야, 아메리카노
// cafe.newCafe.print(); //이디야, 라떼
const myCafe = cafe.print;
myCafe(); //window 출력