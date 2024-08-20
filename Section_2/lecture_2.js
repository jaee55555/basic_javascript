const executor = (reseolve, reject) =>{
    setTimeout(()=>{
        reseolve('성공');
        reject('실패');
    },3000);
};

const promise = new Promise(executor);

// promise.then(
//     (result)=>{console.log(result)}, 
//     (error)=>{console.log(error)}
// );

promise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });
//promise를 사용하는 이유?
//js의 콜백지옥을 해결하기 위함.

//콜백지옥이란?
const workA = (value, callback) => {
    setTimeout(()=>{
        callback(value + 5);
    }, 5000);
}
const workB = (value, callback) => {
    setTimeout(()=>{
        callback(value - 3);
    }, 3000);
}
const workC = (value, callback) => {
    setTimeout(()=>{
        callback(value + 10);
    }, 10000);
}

workA(10, (resA)=>{
    console.log(`workA: ${resA}`);
    workB(resA, (resB)=>{
        console.log(`workB: ${resB}`);
        workC(resB, (resC)=>{
            console.log(`workC: ${resC}`);
        })
    });
});
//workA: 15
//workB: 12
//workC: 22