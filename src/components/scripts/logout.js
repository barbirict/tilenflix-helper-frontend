import { getAuth, signOut } from "firebase/auth";

export default function logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
        alert("Sign - out successful")
    }).catch((error) => {
        alert(error)
    });
}