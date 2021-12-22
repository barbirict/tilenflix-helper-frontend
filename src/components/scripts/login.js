import firebase from "firebase/compat";
//
let isSucces = false;
export default function loginAttempt(data){
    console.log("not "+data.email+"  "+data.password)
    async function f(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
        })
        .catch(err => {
            alert(err.message)
        })
        }
        f().then(OnSucces())
    console.log(isSucces)
    return isSucces
}

function OnSucces(){
    isSucces=true
}