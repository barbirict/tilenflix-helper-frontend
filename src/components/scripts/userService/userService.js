import axios from "axios";


class userService {
    async get(id) {
        const response = await axios.get('/api/users/'+id)
        return await response.data
    }
}

export default new userService()