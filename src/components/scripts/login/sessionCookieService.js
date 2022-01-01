//import axios from "axios";
import axios from "axios";

class sessionCookieService {
    async createSessionCookie(cst, it) {
      /*  const response = await fetch('/svc/cookies/new', {
            withCredentials: true,
            method: 'POST',
            body: JSON.stringify({
                idToken: it,
                csrfToken: cst

            }),
            headers:{
                "Content-type": "application/json",
                "Access-Control-Allow-Private-Network": true
            }
        })
        return response.json()*/
        const response = await axios.request({
            withCredentials: true,
            method: 'post',
            url: '/svc/cookies/new',
            data: {
                idToken: it,
                csrfToken: cst

            },
            headers:{
                "Content-type": "application/json",
                "Access-Control-Allow-Private-Network": true
            }
        })
        return await response.data
    }
    async verifySessionCookie() {
    const response = await axios.request( {
        withCredentials: true,
        method: 'post',
        url: '/svc/cookies/verify'
    })
        return await response.data
    }
        return /*axios.request( {
            withCredentials: true,
            method: 'post',
            url: '/svc/cookies/verify',
            headers:{
                "Access-Control-Allow-Private-Network": true
            }
        })
    }*/
}

export default new sessionCookieService()