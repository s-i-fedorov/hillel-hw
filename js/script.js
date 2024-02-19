class Posts {
    #
}

    const myModal = new bootstrap.Modal(
        document.getElementById('staticBackdrop')
    )
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
                `https://jsonplaceholder.typicode.com/comments?id=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }

    viewPostHandler(postId)
    function renderPost(data) {
        const dataFromServer = data
        if (dataFromServer.length > 1) throw new Error('Something went wrong')
        const dataObj = dataFromServer[0]
        console.log(dataObj)
        const modalTitle = document.querySelector('[data-modal-title]')
        const modalBody = document.querySelector('[data-modal-body]')
        const commentBtn = document.querySelector([data-comment-btn])
        modalTitle.textContent = `Title: ${dataObj.title}`
        modalBody.textContent = dataObj.body
        myModal.show()
        commentBtn.addEventListener('click', (e , dataObj.id) => {
            viewPostHandler(e,dataObj.id)
        })

        // console.dir(modalTitle)
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
        const searchBtn = document.querySelector('#button-addon2')
        if (target !== searchBtn) return
        const inputField = document.querySelector('[data-input-field]')
        const inputValue = +inputField.value
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
        document.addEventListener('click', buttonHandler)
    }

    function lookAndComment() {}

    // console.dir(getPosts(5))
    // const result = getPosts(5)
    // result.then((response) => {
    //     console.log(response)
    // })
    inputHandler()
