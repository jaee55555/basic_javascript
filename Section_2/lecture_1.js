//동기
const workA = () => {
    console.log('workA');
};
const workB = () => {
    console.log('workB');
};
const workC = () => {
    console.log('workC');
};

workA(); //workA
workB(); //workB
workC(); //workC


//비동기
//setTimeout(()=>{}, delayTime);
//콜백함수를 delayTime 후에 수행

setTimeout(()=>{
    console.log('비동기')
}, 3000); ///1000이 1초
console.log('종료');
//종료
//비동기

const work = (callback)=> {
    setTimeout(()=>{
        console.log('비동기')
        callback();
    }, 3000);
};
work(()=>{
    console.log('종료');
})

const workAA = () => {
    setTimeout(()=>{
        console.log('workAA')
    }, 5000);
};
const workBB = () => {
    setTimeout(()=>{
        console.log('workBB')
    }, 3000);
};
const workCC = () => {
    setTimeout(()=>{
        console.log('workCC')
    }, 10000);
};
const workDD = () =>{
    console.log('workDD');
};
workAA();
workBB();
workCC();
workDD();
//workDD
//workBB
//workAA
//workCC