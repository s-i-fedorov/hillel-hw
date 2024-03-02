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

}
