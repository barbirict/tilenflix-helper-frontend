<template>
  <div>
  <navigation></navigation>
    <div class="child1" >
      <sidebar></sidebar>
    </div>
      <div class="child">
      <router-view></router-view>
        <sidebar-item v-on:click="alert('0aah')">te</sidebar-item>
    </div>

  </div>
</template>

<script>
import Navigation from "@/navigation";
import Sidebar from "@/components/sidebar";
export default {
  name: "mainView",
  components: {Sidebar, Navigation},

  methods:{
    /*test(){
      alert("yes")
      var obj = this.$router.getRoutes()
      for(var i=0; i<obj.length; i++){
        alert(obj[i].name)
      }
      this.$router.push('/dashboard')
    }*/
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