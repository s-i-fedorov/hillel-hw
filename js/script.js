'use strict';

function padString(row,rowLength,superSymbol,leftRight = true){
    if (row === undefined){
        return console.log('ви не ввели рядок')
    } else if (rowLength === undefined) {
        return console.log('ви не ввели довжину рядка')
    } else if ((superSymbol === undefined) && (row.length<=rowLength)) {
        return console.log('ви не ввели спецсимвол')
    }
    if (rowLength <= row.length) {
        console.log(row.substring(0,rowLength))
    }else if(leftRight === true) {
        console.log(row.padEnd(rowLength,superSymbol))
    } else {
        console.log(row.padStart(rowLength,superSymbol))
    }
    }

    padString('helloWorld',15,'-',false )
