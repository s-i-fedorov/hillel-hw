'use strict';
// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокуса - <div> так само пропадає
(function (){

    // mouseover / mouseout
const ghostDiv = document.createElement('div')
    ghostDiv.setAttribute('style','width: 100px; height: 100px; background-color: green;')
    // ghostDiv.setAttribute('data-ghost')
    document.body.append(ghostDiv)
    console.log(ghostDiv)
    const event = document.querySelector('[data-form]')
    event.addEventListener('mouseover', ()=>{
        console.log('it works')
    })
})()