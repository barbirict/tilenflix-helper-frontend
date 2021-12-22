import { getAuth } from "firebase/auth";
export default function getUserFromFire(){
    const auth = getAuth()
    const usr = auth.currentUser
    return usr
}