'use strict';
// 1
// Создайте страницу, на которой можно выбрать цветовую схему. Используйте радиокнопки или выпадающий
// список для выбора цветовой схемы (например, "Светлая" и "Темная"). При выборе цветовой схемы ее значение
// должно сохраняться в localStorage. При обновлении страницы выбранная цветовая схема должна загружаться
// из localStorage и применяться на странице.

// 2
// Реализуйте функционал "Избранное". Создайте страницу, на которой можно добавлять и удалять элементы из
// списка избранных элементов. Каждый элемент списка должен иметь кнопку "Добавить в избранное" или "Удалить " +
// "из избранного". Состояние избранного (добавлен или удален) для каждого элемента должно сохраняться в
// localStorage. При обновлении страницы состояние избранного должно загружаться из localStorage и отображаться
// на странице.
(function (){

    const setBodyTheme = (value)=>{
    const bodyTheme = document.querySelector('body')
    if(+value===0) {
        bodyTheme.style.backgroundColor= 'white'
        bodyTheme.style.color= 'black'
    } else {
        bodyTheme.style.backgroundColor = 'darkslategray'
        bodyTheme.style.color = 'aquamarine'
    }
    localStorage.setItem('themeValue', value)
    }

    const selectTheme = (e)=>{
        let value = e.target.value
        setBodyTheme(value)
        }

        const createElem = (id)=>{
            const productItem = document.getElementById(id)
            const favourites = document.querySelector('[data-favorites]');
            let favProductItem = productItem.cloneNode(true)
            favProductItem.querySelector('[data-itemBtn]').
                innerHTML='Del from favorite'
            favProductItem.setAttribute('data-favorite','')
            favourites.appendChild(favProductItem)
        }

        const resetStorage = (elementId,e)=>{
            const productItem = e.target.parentElement
            // console.log(productItem.childNodes);
            const getData =JSON.parse(localStorage.getItem('dataList'))
            if(!getData) localStorage.setItem('dataList', JSON.stringify([elementId]))
            else if (productItem.parentElement.hasAttribute('data-favorites')){
                console.log(productItem.parentElement.children)
            }
            else {
                getData.push(elementId)
                localStorage.setItem('dataList', JSON.stringify(getData))
            }
        }

    const moveProduct = (e)=>{
        e.stopPropagation()
        const productItem = e.target.parentElement

        const elemId = productItem.getAttribute('id')

        const element = e.target
        if(element.hasAttribute('data-itemBtn')){
            if(productItem.parentElement.hasAttribute('data-goodslist')){
                createElem(elemId)
                resetStorage(elemId,e)

            }
            if(productItem.parentElement.hasAttribute('data-favorites')) {
                resetStorage(elemId,e)
                productItem.remove()
            }
        }


    }

    const checkStorage = ()=>{
        let themeValue = +localStorage.getItem('themeValue')
        setBodyTheme(themeValue)

    }

    const select = document.querySelector('select');
    const goods = document.querySelector('[data-goods]');
    select.addEventListener('change', selectTheme)
    goods.addEventListener('click', moveProduct)
    document.addEventListener('DOMContentLoaded', checkStorage)
})()