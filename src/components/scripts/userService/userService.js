import axios from "axios";

export default class userService {
    async get(id, token) {
        return  await axios.request({
            method: "get",
            url: '/data/users/'+id,
            headers:{
                Authorization:token
            }
        })
    }
}
