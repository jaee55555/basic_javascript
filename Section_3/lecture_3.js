const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('3초가 지났습니다.');
        },ms);
    });
};

//async는 비동기 작업을 할때 사용 => 코드를 직관적으로 해석 가능
//async는 자동으로 promise 객체를 반환함
//delay를 호출하는 start 함수
// const start = async () => {
//     // delay(3000).then((res)=>{
//     //     console.log(res);
//     // });

//     // //await => promise를 기다렸다가 처리함
//     // //promise의 then 보다 가독성 좋게 작성 가능
//     // //await은 asunc가 있는 함숫 내부에서만 사용 가능
//     // let result = await delay(3000);
//     // console.log(result);

//     try{
//         let result = await delay(3000);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// };

// start();


const workA = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('workA');
        }, 5000);
    })
}
const workB = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('workB');
        }, 3000);
    })
}
const workC = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('workC');
        }, 10000);
    })
}

const start = async() => {
    try{
        // let resultA = await workA();
        // let resultB = await workB();
        // let resultC = await workC();
        // console.log(resultA);
        // console.log(resultB);
        // console.log(resultC);

        let results = await Promise.all([workA(),workB(),workC()]);
        results.forEach(res => console.log(res));
    }catch(err){
        console.log(err);
    }

};

start();
//workA
//workB
//workC


//promise all은 여러 개의 프로미스를 병렬로 실행하고 모든 프로미스가 완료될 때까지 기다렸다가 한번에 반환
//하나라도 실패하면 즉시 실패로 간주하여 오류 출력