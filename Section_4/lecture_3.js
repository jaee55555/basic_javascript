// let $type = document.createElement('div');
// $type.className = 'info-item';
// $type.id = 'type';
// let $typeText = document.createTextNode('말티즈');
// // $type.textContent = '말티즈';

// console.log($type);
// console.log($typeText);


//appendChild
// let $animalInfo = document.querySelector('div.animal-info');
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);
// console.log($type);
// console.log($typeText);

// let $button = document.createElement('button');
// $button.id = 'new-button';
// $button.classList.add('new-button');
// $button.textContent = '버튼';
// $button.addEventListener("click", ()=>{
//     window.alert('클릭');
// })

// let $animalInfo = document.querySelector('div.animal-info');
// $animalInfo.appendChild($button);
// console.log($animalInfo);


//innerHTML
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.innerHTML = "<div id='name'>고양이</div>"
console.log($animalInfo);