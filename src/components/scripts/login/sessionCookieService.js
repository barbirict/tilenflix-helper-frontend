import axios from "axios";
class sessionCookieService {
    createSessionCookie(cst, it) {
        return axios.request({
            withCredentials: true,
            method: 'post',
            url: 'http://localhost:6060/svc/cookies/new',
            data: {
                idToken: it,
                csrfToken: cst

            },
            headers:{
                "Content-type": "application/json"
            }
        })
    }
    verifySessionCookie() {
        return axios.request( {
            withCredentials: true,
            method: 'post',
            url: 'http://localhost:6060/svc/cookies/verify',
        })
    }
}

export default new sessionCookieService()