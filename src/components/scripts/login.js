import firebase from "firebase/compat";
import Cookies from 'js-cookie'

//
let isSucces = false;
export default function loginAttempt(data){
    console.log("not "+data.email+"  "+data.password)
    async function f(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(user => {
            return suer.getIdToken().then(idToken => {
                const csrfToken = Cookies.get('csrfToken')
                return postIdTokenToSession
            })
        })
        .catch(err => {
            alert(err.message)
        })
        }
        f().then(OnSucces())
    console.log(isSucces)
    return isSucces
}

function makeCookie(idToken, csrfToken){
    const idT = idToken
    const csrfT = csrfToken
    if(csrfT !== Cookies.get('csrfToken')){
        alert("401")
        return
    }
    const expiresIn = 60 * 60 * 24 * 5 * 1000


}

function OnSucces(){
    console.log(Cookies.get("testni"))
    isSucces=true
}
