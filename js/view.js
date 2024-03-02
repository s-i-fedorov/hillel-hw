class View {

    static selectors = {
        albumList: document.querySelector('[data-list]'),
    }

    static renderListItem(data){
        const listItem = document.createElement('a');
            listItem.classList = "list-group-item list-group-item-action";
            listItem.href=`./album.html?albumId=${data.id}`;
            listItem.setAttribute('data-album-id', data.id);
        listItem.textContent = data.id +'. '+ data.title
        View.selectors.albumList.append(listItem)
    }

}
