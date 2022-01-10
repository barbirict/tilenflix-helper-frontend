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
import loginAttempt from "@/components/scripts/login/login";

import decrypt from "@/components/scripts/decryptor";
import userService from "@/components/scripts/userService/userService";

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
      const data = {
        email: this.email,
        password: this.password
      };
        this.loading = true
        await loginAttempt(data)

        userService.get()
        .then(response => {
              console.log("ah" + decrypt(response))
              this.$store.commit('setUser', new user(response.username, response.name, response.surname, data.email, response.id))
              console.log("g" + JSON.stringify(this.$store.getters.getUser))
              this.emitter.emit('userLoggedIn')
              this.$router.push('dashboard')
              this.$vaToast.init({
                message: '<span><va-icon class="material-icons">check_circle</va-icon>  successful login!</span>',
                html: true,
                color: 'success'
              })
            })

      }
    }
}
</script>

<style scoped>

</style>