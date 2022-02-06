<template>
  <main-view></main-view>

</template>

<script>
import MainView from "@/components/views/mainView";
import user from "@/model/user";
import Cookies from 'js-cookie'
import loginService from "@/components/scripts/login/loginService";

export default {
  name: 'App',
  created() {
    window.addEventListener("resize", this.sizeChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.sizeChange);
  },
  mounted() {
    /* axios.get('/svc/cookies/csrftoken').then((response) => {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
      this.$store.commit('setCsrf', response.data.csrfToken)
    }, (err) => {
      console.log(err)
    })*/
    if (this.$store.getters.getUser == null) {
      if (Cookies.get('session') != null) {
        loginService.auth(Cookies.get('session')).then(response => {
          if (response.status === 200) {
            const data = response.data
            this.$store.commit('setUser', new user(data.username, data.name, data.surname, data.email, data.id))
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
