import axios from "axios";

export default class loginService {

    static async login(email, pass) {
        return await axios.request({
            method: 'post',
            url: '/auth/login',
            data: {
                email: email,
                password: pass
            }
        })
    }

    static async logout(token) {
        return await axios.request({
            method: 'post',
            url: '/auth/logout',
            headers: {
                Authorization: token
            }
        })
    }

    static async auth(token) {
        return await axios.request({
            method: 'post',
            url: '/auth/',
            headers: {
                Authorization: token
            }
        })
    }
}