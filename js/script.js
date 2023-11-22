'use strict';
// Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.
// P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.
(function (){

let tab = document.createElement('table')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    document.body.append(tab)
    for(let i=0;i<10;i++){
        tab.append(tr)
        for(let a=0;a<10;a++){
            tr.append(td)
            let qS = document.querySelectorAll('td')
            let lTd = qS[qS.length-1]
            lTd.innerHTML=i+10+a;

        }

    }

})()