<template>
  <div id="top">
  <navigation class="sticky"></navigation>
    <div class="child1" >
      <sidebar v-bind:class="{side_thing: sidebarShown}"></sidebar>
    </div>
      <div v-bind:class="{ pushLeft2: sidebarHover, wrapper: sidebarShown}" class="child" style="">
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
    window.scrollTo(0,0)
    this.emitter.on('sidebarSwitch' || 'sidebarResize', () => {
      if(window.innerWidth < 991) {
        this.sidebarShown = !this.sidebarShown
      }
    })
    this.emitter.on('sidebarHover', () => {
      if(this.$route.name === 'dashboard')
      this.sidebarHover = !this.sidebarHover;
    })
  },
  data() {
    return {
      sidebarShown: false,
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
@media only screen and (max-width: 1068px) {
  .pushLeft2 {
    transition: margin 0.3s ease;
    margin-left: 10%;
  }
}
@media only screen and (min-width: 1069px) and (max-width: 1168px) {
  .pushLeft2 {
    transition: margin 0.3s ease;
    margin-left: 8%;
  }
}
@media only screen and (min-width: 1169px) and (max-width: 1268px) {
  .pushLeft2 {
    transition: margin 0.3s ease;
    margin-left: 6%;
  }
}
  @media only screen and (min-width: 1269px) and (max-width: 1368px) {
    .pushLeft2 {
      transition: margin 0.3s ease;
      margin-left: 4%;
    }
  }
@media only screen and (min-width: 1369px) and (max-width: 1468px) {
  .pushLeft2 {
    transition: margin 0.3s ease;
    margin-left: 2%;
  }
}
@media only screen and (max-width: 991px){
  .side_thing{
    position: fixed;
    top: 70px;
  }
}
</style>