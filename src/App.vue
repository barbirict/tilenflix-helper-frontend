<template>
  <main-view></main-view>


</template>

<script>
import MainView from "@/components/views/mainView";
import sessionCookieService from "@/components/scripts/login/sessionCookieService";
import userService from "@/components/scripts/userService/userService";
import user from "@/model/user";
import Cookies from 'js-cookie'

export default {
  name: 'App',
  mounted() {
    this.$cookies.set('csrfToken', this.$store.getters.getCsrf)
    if (this.$store.getters.getUser == null) {
      if (Cookies.get('session') != null) {
        sessionCookieService.verifySessionCookie().then(response => {
          console.log(response)
          userService.get(response.uid).then(responsee => {
            this.$store.commit('setUser', new user(responsee.username, responsee.name, responsee.surname, responsee.email, response.uid))
            console.log("g" + JSON.stringify(this.$store.getters.getUser))
            this.emitter.emit('userLoggedIn')
            this.$router.push('dashboard')
            this.$vaToast.init({
              message: '<span><va-icon class="material-icons">check_circle</va-icon> Welocme back!</span>',
              html: true,
              color: 'success'
            })

          })
        })
      }
    }
  },
  components: {
    MainView,
  }
}
</script>

<style>
</style>
