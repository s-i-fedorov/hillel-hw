;(function () {
    async function getPosts(id) {
        if (!(typeof id === 'number') || !(id > 0) || !(id <= 100))
            throw new Error('You entered invalid "Id"')
        const req = await fetch(
            `https://jsonplaceholder.typicode.com/posts?id=${id}`
        )
        const data = await req.json()
        if (data.length > 1) throw new Error('Something went wrong')
        dataObj = data[0]
        return dataObj
        // console.log(dataObj.body)
    }

    // console.dir(getPosts(5))
    const result = getPosts(5)
    result.then((response) => {
        console.log(response)
    })
})()
