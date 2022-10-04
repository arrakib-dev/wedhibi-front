
import axios from "./axios";

const sentRequest = (method, url, data, token='')  => {
    if(token !== ''){
        axios.default.headers.common['Authorization'] = 'Bearer ' + token
    }

    if(method ==='post') {
        return axios.post(url, data)
    } else {
        return  axios.get(url, data)
    }

}

export default sentRequest
