<template>
  <div>
  <navigation></navigation>
    <div class="child1" >
      <sidebar></sidebar>
    </div>
      <div v-bind:class="{pushLeft: sidebarShown}" class="child">
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
  created() {
    this.emitter.on('sidebarSwitch', () => {
      if(this.sidebarShown) this.sidebarShown = false
      else this.sidebarShown = true
    })
  },
  data() {
    return {
      sidebarShown: false
    }
  },
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
@media only screen and (max-width: 1500px) {
  .pushLeft {
    margin-left: 280px;
  }
}
</style>