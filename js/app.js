let body = document.querySelector("body")
let moodBtn = document.querySelector("nav .moodBtn");

function darkMood (){
    body.classList.toggle('moodShift')
}

moodBtn.addEventListener('click' , darkMood)


const logoImg = document.getElementById('logo');


function switchLogo(isLightMode) {
if (isLightMode) {
logoImg.src = './Images/Asset 1.png';
} else {
logoImg.src = './Images/Asset 2.png';
}
}

let isLightMode = false;
document.body.addEventListener('click', () => {
isLightMode = !isLightMode;
switchLogo(isLightMode);
});