const postFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Token passando pelo custom.js'
    }
})