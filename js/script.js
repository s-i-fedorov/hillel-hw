'use strict';
// Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.
// P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.
(function (){

let tab = document.createElement('table')
    // let tr = document.createElement('tr')
    // let td = document.createElement('td')
    document.body.append(tab)
    for(let i=0;i<10;i++){
        let tr = document.createElement('tr')
        tab.append(tr)
        for(let a=0;a<10;a++){
            // tr.append(td)
            // let lTd = document.querySelector('td:last-of-type')
            let td = document.createElement('td')
            td.textContent=i*10+a+1;
            tr.append(td)

        }

    }

})()