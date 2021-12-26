<template>
<va-card class="flex" color="cardb">
  <va-card-title>Login</va-card-title>
  <va-card-content>
    <form @submit.prevent="handleSubmit">
    <va-input
      class="mb-4"
      v-model="email"
      label="Username:"
      autofocus
    ></va-input>
      <va-input
          class="mb-4"
          v-model="password"
          label="Password:"
          type="password"
      ></va-input>
      <va-button class="mr-6 justify-self--end" type="submit">Login</va-button>

    </form>


  </va-card-content>
</va-card>
</template>

<script>
import user from "../../model/user"
import loginAttempt from "@/components/scripts/login/login";
import userService from "@/components/scripts/userService/userService";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: "loginCard",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit(){
      const data = {
        email: this.email,
        password: this.password
      };
      var t = loginAttempt(data)
      console.log(t)
      if(t){
        const auth = getAuth();
        onAuthStateChanged(auth, (usr) => {
          if (usr) {
            userService.get(usr.uid).then(response=>{
              this.$store.commit('setUser', new user(response.data.username,response.data.name,response.data.surname,data.email, usr.uid))
              console.log("g" + JSON.stringify(this.$store.getters.getUser))
              this.emitter.emit('userLoggedIn')
              this.$router.push('dashboard')
              this.$vaToast.init({message: '<span><va-icon class="material-icons">check_circle</va-icon>  successful login!</span>', html: true, color:'success'})
            })
          }
        })


      }
    }
  }

}
</script>

<style scoped>

</style>