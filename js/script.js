'use strict';
// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає
(function (){

    // mouseover / mouseout
const ghostDiv = document.createElement('div')
    ghostDiv.setAttribute('max-width','100px')
    ghostDiv.setAttribute('max-height','100px')
    document.body.append(ghostDiv)
    console.log(ghostDiv)
})()