import {getAuth, onAuthStateChanged} from "firebase/auth"

export default function userState() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            const uid = user.uid
            alert(uid)
        }
        else {
            return false
        }
    })
}