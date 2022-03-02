import axios from "axios";

export default class userService {
    static async get(id, token) {
        return await axios.request({
            method: "get",
            url: '/data/users/' + id,
            headers: {
                Authorization: token
            }
        })
    }

    static async getAll(token) {
        return await axios.request({
            method: "get",
            url: '/data/users/',
            headers: {
                Authorization: token
            }
        })
    }


    static async new(user, token) {
        return await axios.request({
            method: "post",
            url: "/data/users/new",
            headers: {
                Authorization: token
            },
            data: {
                User: user
            }
        })
    }

    static async edit(user, token) {
        return await axios.request({
            method: "put",
            url: "/data/users/" + user.id,
            headers: {
                Authorization: token
            },
            data: {
                user: user
            }
        })
    }
}
