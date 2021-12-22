import {getAuth} from "firebase/auth"

export default async function gre () {

    const auth = await getAuth();
    const user = auth.currentUser;
    if(user) {
        alert("ja")
        alert(JSON.stringify(user.toJSON()))
    }

}