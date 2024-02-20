class Model {
    async requestHandler(inputValue) {
        try {
            const data = await this.getPosts(inputValue)
            View.renderPost(data)
        } catch (e) {
            console.log(e)
        }
    }

    async getComments(id) {
        try {
            let data = await fetch(
                `https://jsonplaceholder.typicode.com/comments?postId=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }

    async getPosts(id) {
        try {
            let data = await fetch(
                `https://jsonplaceholder.typicode.com/posts?id=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }
}
