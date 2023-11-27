'use strict';
// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокуса - <div> так само пропадає
(function (){

    const ghostDiv = document.querySelector('.ghostDiv')
    const dataLabel = document.querySelector('[data-label]')
    dataLabel.addEventListener('mouseover', ()=>{
        ghostDiv.style.display='block'
    })
    dataLabel.addEventListener('mouseout', ()=>{
        ghostDiv.style.display='none'
    })

})()