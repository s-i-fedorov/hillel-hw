class Model {
    async getAlbumsList() {
        try {
            const data = await fetch(
                `https://jsonplaceholder.typicode.com/albums`
            )
            return data.json()
        } catch (e) {
            console.log(e)
        }
    }

}
