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
import Navigation from "@/navigation";
import Sidebar from "@/components/sidebar";
export default {
  name: "mainView",
  components: {Sidebar, Navigation},

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