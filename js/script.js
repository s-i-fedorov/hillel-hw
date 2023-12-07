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

    const setBodyTheme = (e)=>{
        let value = e.target.value
        const bodyTheme = document.querySelector('body')
        if(+value===0) {
            bodyTheme.style.backgroundColor= 'white'
            bodyTheme.style.color= 'black'
        } else {
            bodyTheme.style.backgroundColor = 'darkslategray'
            bodyTheme.style.color = 'aquamarine'
        }
        }

    const moveProduct = (e)=>{
        e.stopPropagation()
        if(e.target.hasAttribute('data-itemBtn')){
        const favourites = document.querySelector('[data-favorites]');
        const productItem = e.target.parentElement
        console.log(productItem)
        let favProductItem = productItem.cloneNode(true)
            favProductItem.querySelector('[data-itemBtn]').
                innerHTML='Del from favorite'
        favourites.appendChild(favProductItem)}


    }

    const select = document.querySelector('select');
    const goodsList = document.querySelector('[data-goodsList]');
    select.addEventListener('change', setBodyTheme)
    goodsList.addEventListener('click', moveProduct)
})()