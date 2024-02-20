class View {
    static myModal = new bootstrap.Modal(
        document.getElementById('staticBackdrop')
    )
    static selectors = {
        modalTitle: document.querySelector('[data-modal-title]'),
        modalBody: document.querySelector('[data-modal-body]'),
        commentBtn: document.querySelector('[data-comment-btn]'),
        searchBtn: document.querySelector('#button-addon2'),
        inputField: document.querySelector('[data-input-field]'),
        input: document.querySelector('[data-input]'),
    }

    static renderPost(data) {
        View.selectors.inputField.value = ''
        View.selectors.inputField.placeholder =
            'Enter the post number from 1 to 100'
        const dataFromServer = data
        if (dataFromServer.length > 1) throw new Error('Something went wrong')
        const dataObj = dataFromServer[0]
        View.selectors.modalTitle.textContent = `Title #${dataObj.id}: ${dataObj.title}`
        View.selectors.modalBody.textContent = dataObj.body
        View.myModal.show()
        Controller.searchedPostId = dataObj.id
    }
}
