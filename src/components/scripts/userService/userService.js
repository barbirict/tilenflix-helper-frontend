import axios from "axios";


class userService {
    async get() {
        const response = await axios.request({
            withCredentials: true,
            method: "get",
            url: '/api/users/0',
            data:{
                id: 0
            }
        })
        return await response.data
    }
}

export default new userService()