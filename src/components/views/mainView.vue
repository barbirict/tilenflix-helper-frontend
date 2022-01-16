<template>
  <div>
  <navigation class="sticky"></navigation>
    <div class="child1" >
      <sidebar></sidebar>
    </div>
      <div v-bind:class="{ pushLeft2: sidebarHover, wrapper: sidebarShown}" class="child">
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
      this.sidebarShown = !this.sidebarShown
    })
    this.emitter.on('sidebarHover', () => {
      this.sidebarHover = !this.sidebarHover;
    })
  },
  data() {
    return {
      sidebarShown: true,
      sidebarHover: false
    }
  },
  methods:{
  }
}
</script>

<style scoped>

.sticky{
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
 height: 70px;
}

.child {
  width: 100%;
  float: left;
  margin-top: 70px;
}
.child1{
  width: 0%;
  float: left;
  margin-top: 70px;
}
@media only screen and (max-width: 1500px) {
  .pushLeft2 {
    margin-left: 180px;
  }
}
@media only screen and (max-width: 600px){
  .wrapper{
    margin-top: 32vh;
    display: none;
  }
}
</style>