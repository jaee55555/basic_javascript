//API란?
//웹브라우저는 API를 사용해서 웹사이트에 필요한 데이터를 요청하고 전달받는다.

//JSON(Javascript Object Notation)
//자바스크립트 객체 표기법 => 데이터를 문자열 형태로 형태로 나타냄

// let response = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err));
// console.log(response);

// const getData = async() => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');

//     //위에 있는 fetch는 비동기 함수이기 때문에, 
//     //모든 동작이 끝나고 데이터를 받아오기 위해서 data도 await으로 받아온다.
//     let data = await response.json();
//     console.log(response);
//     console.log(data);
// };


//async와 await 활용
const getData = async() => {
    try{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    //위에 있는 fetch는 비동기 함수이기 때문에, 
    //모든 동작이 끝나고 데이터를 받아오기 위해서 data도 await으로 받아온다.
    let data = await response.json(); //데이터 값을 배열로 받아옴
    console.log(data);
    }catch(err){
    console.log(response);
    }
};
getData();
