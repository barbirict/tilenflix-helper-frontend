<template>
  <main-view></main-view>


</template>

<script>
import MainView from "@/components/views/mainView";
import sessionCookieService from "@/components/scripts/login/sessionCookieService";
import userService from "@/components/scripts/userService/userService";
import user from "@/model/user";
export default {
  name: 'App',
  mounted() {
    this.$cookies.set('csrfToken', (Math.random()* 100000000000000000).toString())
    if(this.$store.getters.getUser == null){
      sessionCookieService.verifySessionCookie().then(response =>{
        console.log(response.data)
        userService.get(response.data).then(responsee=>{
          this.$store.commit('setUser', new user(responsee.data.username,responsee.data.name,responsee.data.surname,responsee.email, response.uid))
          console.log("g" + JSON.stringify(this.$store.getters.getUser))
          this.emitter.emit('userLoggedIn')
          this.$router.push('dashboard')
          this.$vaToast.init({message: '<span><va-icon class="material-icons">check_circle</va-icon> Welocme back!</span>', html: true, color:'success'})

        })
      })
    }
  },
  components: {
    MainView,
  }
}
</script>

<style>
</style>
