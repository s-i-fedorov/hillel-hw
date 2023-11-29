'use strict';
(function (){
    // Завдання: Створіть веб-сторінку з галереєю зображень. Додайте можливість клікати на зображення,
    //     щоб воно збільшувалося або відкривалося в модальному вікні. Технології: JavaScript для обробки
    //     кліків і маніпуляції зображеннями, CSS для стилізації.
    //
    //     Завд. 2 - Розробка Простого Табулятора:
    //     Завдання: Створіть систему вкладок (tabs), де клік по вкладці показує відповідний контент, а інші
    // вкладки стають прихованими. Технології: Використання JavaScript для переключення між вкладками і
    // управління видимістю контенту.
    // const tab1 = document.querySelector('.tab1')
    // const tab2 = document.querySelector('.tab2')
    // const tab3 = document.querySelector('.tab3')
    const row = document.querySelector('.row')

    // const content1 = document.querySelector('.content1')
    // const content2 = document.querySelector('.content2')
    // const content3 = document.querySelector('.content3')
    // tab1.addEventListener('click',(ev)=>{
    //     tab1.style.backgroundColor='lightgray'
    //     tab2.style.backgroundColor='white'
    //     tab3.style.backgroundColor='white'
    //     content1.style.zIndex='1'
    //     content2.style.zIndex='0'
    //     content3.style.zIndex='0'
    //     // console.log(ev.target);
    // })
    // tab2.addEventListener('click',()=>{
    //     tab1.style.backgroundColor='white'
    //     tab2.style.backgroundColor='lightgray'
    //     tab3.style.backgroundColor='white'
    //     content1.style.zIndex='0'
    //     content2.style.zIndex='1'
    //     content3.style.zIndex='0'
    // })
    // tab3.addEventListener('click',()=>{
    //     tab1.style.backgroundColor='white'
    //     tab2.style.backgroundColor='white'
    //     tab3.style.backgroundColor='lightgray'
    //     content1.style.zIndex='0'
    //     content2.style.zIndex='0'
    //     content3.style.zIndex='1'
    // })
    let selectedEl
    const color = (elem)=>{
        if(selectedEl) selectedEl.style.backgroundColor=null;
        selectedEl=elem
        elem.style.backgroundColor='lightgray';
    }
    row.addEventListener('click',(ev)=>{
        const target = ev.target
        console.log(target.hasAttribute('[.row_tabs]'));
        if(!(target===document.querySelector('.row_tabs'))) return
        // const elemCol = target.style.backgroundColor
        color(target)

        console.log(ev.target);
    })
    // console.log(row)
})()