class View {

    static selectors = {
        albumList: document.querySelector('[data-list]'),
        button: document.querySelector('#button'),
        inputField: document.querySelector('[data-input-field]'),
        input: document.querySelector('[data-input]'),
    }

    static renderAlbumsList(data) {
        const dataFromServer = data.json()
        // console.log(dataFromServer);
        dataFromServer.then(
        result => {result.forEach(i=>View.renderListItem(i))})
        // View.renderListItem()
        // View.selectors.inputField.value = ''
        // View.selectors.inputField.placeholder =
        //     'Enter the post number from 1 to 100'
        // if (dataFromServer.length > 1) throw new Error('Something went wrong')
        // const dataObj = dataFromServer[0]
        // View.selectors.modalTitle.textContent = `Title #${dataObj.id}: ${dataObj.title}`
        // View.selectors.modalBody.textContent = dataObj.body
        // View.myModal.show()
        // Controller.searchedPostId = dataObj.id
    }
    static renderListItem(data){
        const listItem = document.createElement('a');
            listItem.classList = "list-group-item list-group-item-action";
            listItem.href=`./album.html?albumId=${data.id}`;
            listItem.setAttribute('data-album-id', data.id);
        listItem.textContent = data.id +'. '+ data.title
        View.selectors.albumList.append(listItem)
        // console.log(listItem)
    }


}
