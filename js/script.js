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


    const row = document.querySelector('.row')
    const container2 = document.querySelector('.container2')

    let selectedEl=null;
    let selectedCont = null;
    const tab1 = document.querySelector('.tab1')
    tab1.style.backgroundColor='lightgray'
    const color = (elem)=>{
        if(selectedEl) selectedEl.style.backgroundColor=null;
        if(!(elem.getAttribute('data-tab')==='tab1'))
            tab1.style.backgroundColor=null
        selectedEl=elem
        elem.style.backgroundColor='lightgray';
    }
    const showContent = (target)=>{
        const contentAttr = target.getAttribute('data-tab')+'-content';
        const divContent = document.querySelector(`[${contentAttr}]`);
        if(selectedCont) selectedCont.style.zIndex='0';
        selectedCont=divContent
        divContent.style.zIndex='1';
    }

    row.addEventListener('click',(ev)=>{
        const target = ev.target
        if(!(target.classList.contains('row_tabs'))) return
        color(target)
        showContent(target)
    })

    const showModal = (target)=>{
        const modalElem = document.createElement('div')
        modalElem.className = 'modal'
        modalElem.appendChild(target)
        modalElem.addEventListener('click',(elem)=>{
            console.log(elem.target)
        })

        document.body.append(modalElem)
        console.log(target)
    }

    console.log(document.querySelector('.container2'));

    container2.addEventListener('click', (ev)=>{
        const target = ev.target
        // console.log(target.hasAttribute('data-img'))
        if(!(target.hasAttribute('data-img'))) return
        console.log(target)

        showModal(target)
    })

})()