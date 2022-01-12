import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

const testErrors = {
    get400Error: () => requests.get('errortest/bad-request'),
    get401Error: () => requests.get('errortest/unauthorized'),
    get404Error: () => requests.get('errortest/not-found'),
    get500Error: () => requests.get('errortest/server-error'),
    getValidationError: () => requests.get('errortest/validation-error'),
}
const agent = {
    Catalog,
    testErrors
}

export default agent;