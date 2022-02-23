import axios from "axios";

export default class userService {
    static async get(id, token) {
        return  await axios.request({
            method: "get",
            url: '/data/users/'+id,
            headers:{
                Authorization:token
            }
        })
    }
    static async getAll(token) {
        return await axios.request({
            method: "get",
            url: '/data/users/',
            headers:{
                Authorization:token
            }
        })
    }
}
