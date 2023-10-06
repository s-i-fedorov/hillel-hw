'use strict';

let today = new Date();
let age = prompt('Введіть свій рік народження');
let countAge = today.getFullYear()-age;
let city = prompt('Введіть назву міста, в якому ви живете');
let sport= prompt('Введіть ваш улюблений вид спорту');

let ageMessage = null;
let cityMessage = null;
let sportMessage = null;

if (isNaN(age)){
    ageMessage = `Ви ввели некоректне число`
} else if (age===null){
    ageMessage='Шкода що ти не захотів вводити дату свого народження'
} else {
    ageMessage = `Тобі ${countAge} років`
}

if (city==='Київ'){
 cityMessage = 'Ти живеш у столиці України'
} else if (city==='Вашингтон'){
     cityMessage='Ти живеш у столиці США'
} else if (city==='Лондон'){
     cityMessage='Ти живеш у столиці Англії'
} else if (city===null){
    cityMessage='Шкода що ти не захотів вводити своє місто'
} else {
     cityMessage=`Ти живеш у місті ${city}`
}

if (sport==='бокс'){
    sportMessage = 'Круто! Хочеш стати Муххамедом Алі?'
} else if (sport==='футбол') {
    sportMessage = 'Круто! Хочеш стати Мессі?'
} else if (sport==='баскетбол') {
    sportMessage = 'Круто! Хочеш стати Майклом Джорданом?'
} else if (sport===null){
    sportMessage='Шкода що ти не захотів вводити свій улюблений вид спорту'
} else {
    sportMessage = `${sport} це круто! Бажаю тобі успіхів!`
}

alert(`${ageMessage}\n${cityMessage}\n${sportMessage}`);