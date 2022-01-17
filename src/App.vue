<template>
  <main-view></main-view>

</template>

<script>
import MainView from "@/components/views/mainView";
import sessionCookieService from "@/components/scripts/login/sessionCookieService";
import userService from "@/components/scripts/userService/userService";
import user from "@/model/user";
import Cookies from 'js-cookie'
import axios from "axios";

export default {
  name: 'App',
  created() {
    window.addEventListener("resize", this.sizeChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.sizeChange);
  },
  mounted() {
    axios.get('/svc/cookies/csrftoken').then((response) => {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
      this.$store.commit('setCsrf', response.data.csrfToken)
    }, (err) => {
      console.log(err)
    })
    if (this.$store.getters.getUser == null) {
      if (Cookies.get('session') != null) {
        sessionCookieService.verifySessionCookie().then(response => {
          userService.get(response.uid).then(responsee => {
            this.$store.commit('setUser', new user(responsee.username, responsee.name, responsee.surname, responsee.email, response.uid))
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
  methods: {
    sizeChange(){
        this.emitter.emit("sidebarResize")
    }
  },
  components: {
    MainView,
  }
}
</script>

<style>
</style>
