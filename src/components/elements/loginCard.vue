<template>
  <va-inner-loading :loading="loading" :size="60" color="primary">
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
  </va-inner-loading>
</template>

<script>
import user from "../../model/user"
import loginService from "@/components/scripts/login/loginService";
import Cookies from 'js-cookie'
export default {
  name: "loginCard",
  data(){
    return{
      loading: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {

      loginService.login(this.email, this.password)
        .then(response => {
          console.log(response)
          if(response.status !== 401) {
            const data = response.data.data
            Cookies.set("session", response.data.token, {expiresIn: '1d'})
            this.$store.commit('setUser', new user(data.username, data.name, data.surname, this.email, data.id))
            this.emitter.emit('userLoggedIn')
            this.$router.push('dashboard')
            this.$vaToast.init({
              message: '<span><va-icon class="material-icons">check_circle</va-icon>  successful login!</span>',
              html: true,
              color: 'success'
            })
          }
            })

      }
    }
}
</script>

<style scoped>

</style>