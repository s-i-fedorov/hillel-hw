'use strict';
(function (){
    // У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
    // Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

    const content = document.querySelector('.content')
    const img = document.createElement('img')
    const button = document.querySelector('.button')
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    button.addEventListener('click',()=>{
    content.append(img)
    let randomNum = getRandom(1,10)
    img.setAttribute('src',`images/${randomNum}.jpg`)
})

})()