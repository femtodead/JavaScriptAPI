const btnLeft = document.querySelector('.slider__btnLeft');
const btnRight = document.querySelector('.slider__btnRight');
const listImg = ["./img/girl-enjoying-freedom-side-view.jpg","./img/pexels-nunakurt-23928968.jpg","./img/pexels-tibszabo-16441908.jpg","./img/woman-smiles-broadly-points-her-perfect-even-teeth-indicates-corners-lips-looks-away-wears-casual-blue-jumper-isolated-white-with-blank-copy-space.jpg","./img/young-blonde-woman-standing-top-hill.jpg"]
let count = 0;
const listSvg = document.querySelectorAll('.slider__switches_svg');

btnRight.addEventListener('click', function (e) {
    const target = document.querySelector('.switches__target');
    const img = document.querySelector('.slider__img');

    if (target.nextElementSibling ) {
        target.classList.remove('switches__target');
        target.nextElementSibling.classList.add('switches__target');
        count++;
        img.src = listImg[count];
    }
    else{
        target.classList.remove('switches__target');
        document.querySelector('.slider__switches').firstElementChild.classList.add('switches__target');
        count = 0;
        img.src = listImg[count];
    }
});

btnLeft.addEventListener('click', function (e) {
    const target = document.querySelector('.switches__target');
    const img = document.querySelector('.slider__img');
    if (target.previousElementSibling ) {
        target.classList.remove('switches__target');
        target.previousElementSibling.classList.add('switches__target');
        count--;
        img.src = listImg[count];
    }
    else{
        target.classList.remove('switches__target');
        document.querySelector('.slider__switches').lastElementChild.classList.add('switches__target');
        count = 4;
        img.src = listImg[count];
    }
});

for (let index = 0; index < listImg.length; index++) {
    listSvg[index].addEventListener('click', function (e) {
        const img = document.querySelector('.slider__img');
        img.src = listImg[index];
        const target = document.querySelector('.switches__target');
        target.classList.remove('switches__target');
        listSvg[index].classList.add('switches__target');
        count = index;
    });
    
}