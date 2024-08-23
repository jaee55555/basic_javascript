// const $fruitSelect = document.getElementById('fruitSelect');
// // $fruitSelect.addEventListener('change', (event)=>{
// //     console.log(event.target.value);
// // });

// $fruitSelect.remove(2);


const $userName = document.getElementById('userName');
const $password = document.getElementById('password');
// const $login = document.querySelector('button');
// $login.addEventListener('click', ()=>{
//     console.log($userName.value);
//     console.log($password.value);
// })

$userName.value = '아무개';
$password.addEventListener('input', (event)=>{
    console.log(event.target.value);
});