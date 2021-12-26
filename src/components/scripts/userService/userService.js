import http from "../../../data/http-common"

class userService {
    get(id) {
        return http.get("users/"+id)
    }
}

export default new userService()