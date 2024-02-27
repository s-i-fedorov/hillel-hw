class Model {
    async getAlbumsList() {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/albums`
            )
            View.renderAlbumsList(data)
        } catch (e) {
            console.log(e)
        }
    }

    async getFotoFromAlbum(id) {
        try {
            let data = await fetch(
                `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }

    // async getPosts(id) {
    //     try {
    //         let data = await fetch(
    //             `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    //         )
    //         return await data.json()
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
}
