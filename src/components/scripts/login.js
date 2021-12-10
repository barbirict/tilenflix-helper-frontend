import firebase from "firebase/compat";
//
let isSucces = false;
export default function loginAttempt(data){
    alert("not "+data.email+"  "+data.password)
    async function f(){
        return firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            //alert("yess") //this.$route.getRoutes())
           // $router.push('dashboard')
           // this.$store.user(new user('','','','',data.email))
           // window.location.href = "/dashboard"
        })
        .catch(err => {
            alert(err.message)
        })
        }
        f().then(OnSucces())
    alert(isSucces)
    return isSucces
}

function OnSucces(){
    isSucces=true
}