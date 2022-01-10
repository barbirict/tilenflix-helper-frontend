import axios from "axios";


class userService {
    async get(ui) {
        // eslint-disable-next-line no-unused-vars
        const a= ui
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