import firebase from "firebase/compat";
import Cookies from 'js-cookie'
import sessionCookieService from "@/components/scripts/login/sessionCookieService";
import decrypt from "@/components/scripts/decryptor";
//
let isSucces = false;
export default function loginAttempt(data){
    console.log("not "+data.email+"  "+data.password)
    async function f(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(({user}) => {
            return user.getIdToken().then(idToken => {
                const csrfToken = Cookies.get('csrfToken')
                return sessionCookieService.createSessionCookie(csrfToken, idToken, csrfToken)
            })
        })
        .catch(err => {
            alert(err.message)
        })
        }
        return f().then(response => {
            response = decrypt(response)
            console.log("r s c: " + response.sessionCookie)
          Cookies.set('session', response.sessionCookie, response.options)
         // Cookies.set('jwt', response.jwt, response.options)
          OnSucces();
            console.log("here"+isSucces)
            return isSucces
        })


}
function OnSucces(){
    console.log(Cookies.get("testni"))
    isSucces=true
}
