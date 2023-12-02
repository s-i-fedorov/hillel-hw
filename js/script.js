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
        let modalExist = document.querySelector('.modal')
        if(modalExist) modalExist.remove()
        const modalElem = document.createElement('div')
        modalElem.className = 'modal'
        const src = target.getAttribute('src')
        const modalCont = document.createElement('img')
        modalCont.setAttribute('src',src)
        modalElem.appendChild(modalCont)
        document.body.append(modalElem)
        modalElem.addEventListener('click',(elem)=>{
            modalElem.remove()
        })
    }

    console.log(document.querySelector('.container2'));

    container2.addEventListener('click', (ev)=>{
        const target = ev.target
        if(!(target.hasAttribute('data-img'))) return

        showModal(target)
    })

})()