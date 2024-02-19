const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'))
let searchedPostId = null
const selectors = {
    modalTitle: document.querySelector('[data-modal-title]'),
    modalBody: document.querySelector('[data-modal-body]'),
    commentBtn: document.querySelector('[data-comment-btn]'),
    searchBtn: document.querySelector('#button-addon2'),
    inputField: document.querySelector('[data-input-field]'),
}
async function getPosts(id) {
    try {
        let data = await fetch(
            `https://jsonplaceholder.typicode.com/posts?id=${id}`
        )
        return await data.json()
    } catch (e) {
        console.log(e)
    }
}

async function getComments(id) {
    try {
        let data = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        )
        return await data.json()
    } catch (e) {
        console.log(e)
    }
}

function viewPostHandler() {
    myModal.hide()
    const comments = getComments(searchedPostId)
    comments.then(console.log)
}
function renderPost(data) {
    selectors.inputField.value = ''
    selectors.inputField.placeholder = 'Enter the post number from 1 to 100'
    const dataFromServer = data
    if (dataFromServer.length > 1) throw new Error('Something went wrong')
    const dataObj = dataFromServer[0]
    selectors.modalTitle.textContent = `Title #${dataObj.id}: ${dataObj.title}`
    selectors.modalBody.textContent = dataObj.body
    myModal.show()
    searchedPostId = dataObj.id
    selectors.commentBtn.addEventListener('click', viewPostHandler)
}

async function requestHandler(inputValue) {
    try {
        const data = await getPosts(inputValue)
        renderPost(data)
    } catch (e) {
        console.log(e)
    }
}

function buttonHandler({ target }) {
    if (target !== selectors.searchBtn) return
    const inputValue = +selectors.inputField.value
    if (
        !(typeof inputValue === 'number') ||
        !(inputValue > 0) ||
        !(inputValue <= 100)
    )
        throw new Error('You entered invalid "Id"')
    requestHandler(inputValue)
}

function inputHandler() {
    const input = document.querySelector('[data-input]')
    input.addEventListener('click', buttonHandler)
}

inputHandler()
