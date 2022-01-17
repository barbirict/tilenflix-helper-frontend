import firebase from "firebase/compat";
import Cookies from 'js-cookie'
import sessionCookieService from "@/components/scripts/login/sessionCookieService";
import decrypt from "@/components/scripts/decryptor";
import store from '@/components/store/userStore';

//
let isSucces = false;
export default function loginAttempt(data){
    async function f(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(({user}) => {
            return user.getIdToken().then(idToken => {
                const csrfToken = store.getters.getCsrf
                return sessionCookieService.createSessionCookie(csrfToken, idToken)
            })
        })
        .catch(err => {
            alert(err.message)
        })
        }
        return f().then(response => {
            response = decrypt(response)
          Cookies.set('session', response.sessionCookie, response.options)
          OnSucces();
            return isSucces
        })


}
function OnSucces(){
    isSucces=true
}
