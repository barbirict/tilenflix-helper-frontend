import axios from "axios";

export default class requestService {
    static async getUserRequests(id, token) {
        return await axios.request({
            method: "get",
            url: '/data/requests/u/' + id,
            headers: {
                Authorization: token
            }
        })
    }

    static async getMovies(key, token){
        return await axios.request({
            method: "get",
            url: '/data/requests/verify/movie?title=' + key,
            headers: {
                Authorization: token
            }
        })
    }
    static async getTv(key, token){
        return await axios.request({
            method: "get",
            url: '/data/requests/verify/tv?title=' + key,
            headers: {
                Authorization: token
            }
        })
    }
}