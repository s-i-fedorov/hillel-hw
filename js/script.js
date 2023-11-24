'use strict';
// Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.
// P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.
(function (){

    function createTable() {
        let tab = document.createElement('table')
        document.body.append(tab)
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr')
            tab.append(tr)
            for (let a = 0; a < 10; a++) {
                let td = document.createElement('td')
                td.innerHTML = i * 10 + a + 1;
                tr.append(td)
            }
        }
    }
    createTable()

})()