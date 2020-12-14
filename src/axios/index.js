import axios from 'axios'

var Server = axios.create({
    baseURL: "",
    timeout: 6000
})
Server.interceptors.request.use(
    config => {
        var token = sessionStorage.getItem("token")
        if (token) {
            config.headers.Authorization = token
            return config
        } else {
            return config
        }
    })
Server.interceptors.response.use(
    response => {
        return response
    })
export default Server;