'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(lengthLine, characters) {
 let newLine = '';
 while (newLine.length<lengthLine){
 newLine += characters[Math.floor(Math.random()*characters.length)];
 }
    console.log(newLine);
 }

generateKey (10,characters);

