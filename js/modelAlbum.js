class ModelAlbum {
    async getAlbum(id) {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/albums?id=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }

    async getFotoFromAlbum(id) {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
            )
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }

}
