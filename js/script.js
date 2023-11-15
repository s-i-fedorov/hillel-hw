'use strict';

(function (){
    function insertWordInto(row){
        let b=-1;
        return (word)=>{
            let rowToArr = row.split(' ')
            b++
            if (typeof word==="undefined") console.log('Error. Enter word')
            else if (b<=rowToArr.length){
                rowToArr.splice(b,0,word);
            return console.log(rowToArr.join(' '));
            }
            else console.log('All options are exhausted')
        }
    }

const insert = insertWordInto('hello my dear friend')
    insert('Odessa')
    insert('Odessa')
    insert('Odessa')
    insert('Odessa')
    insert('Odessa')
    insert('Odessa')
    insert()

})()