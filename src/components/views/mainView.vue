<template>
  <div>
  <navigation></navigation>
    <div class="child1" >
      <sidebar></sidebar>
    </div>
      <div class="child">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navigation from "@/components/views/navigation";
import Sidebar from "@/components/sidebar";
//import getUserFromFire from "@/components/scripts/getUserFromFire";
//import user from "@/model/user";
export default {
  name: "mainView",
  components: {Sidebar, Navigation},
  /*
  created() {
    var u = this.$cookies.get("usrSession")
    if( u != null){
      const usr = getUserFromFire()
      this.$store.setters("setUser", new user("","","",usr.email,usr.uid))
      console.log(this.$store.getters.getUser)
    }
  },
*/
  methods:{
  }
}
</script>

<style scoped>
.child {
  width: 100%;
  float: left;
}
.child1{
  width: 0%;
  float: left;
}
</style>