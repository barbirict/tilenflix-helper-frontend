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
import loginAttempt from "@/components/scripts/login";
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
      alert(t)
      if(t){
        this.$router.push('dashboard')
        this.$store.commit('setUser', new user('','','','',data.email))
        alert("g" + JSON.stringify(this.$store.getters.getUser))
        this.emitter.emit('userLoggedIn')
      }
    }
  }

}
</script>

<style scoped>

</style>