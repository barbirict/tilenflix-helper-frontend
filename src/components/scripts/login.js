import firebase from "firebase/compat";

export default function loginAttempt(data){
    alert("not "+data.email+"  "+data.password)
    firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            //alert("yess") //this.$route.getRoutes())
            //this.$router.push('/dashboard')
            //alert(this.$route.name)
            window.location.href = "/dashboard"
        })
        .catch(err => {
            alert(err.message)
        })
    alert("uhhh")
}