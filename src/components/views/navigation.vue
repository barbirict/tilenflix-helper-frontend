<!--TODO: Fix transitions between LG/XL to MD/SM/XL-->
<template>
  <va-navbar>
    <template #left>
      <div class="wrapper">
        <va-icon class="sidebutton" v-on:click="clickHandler" :name="ico" />
      <img class="n-logo_sm" src="@/assets/logo.png">
      </div>

    </template>
    <template #center>
    </template>
    <template #right>

    </template>
  </va-navbar>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return{
      ico: "menu"
    }
  },
  created() {
    this.emitter.on('changeIco', () => {
      this.iconSwitch()
    })
  },

  methods:{
    clickHandler(){
      this.emitter.emit('sidebarSwitch')
      this.iconSwitch()
    },
    iconSwitch(){
      if(this.ico === "menu_open") this.ico="menu"
      else this.ico = "menu_open"
    }
  }
}
</script>

<style scoped>

.stickynav{

}

.n-logo_sm{
  height: 50px;
}

.sidebutton{
 float: left;
  display: none;
}
@media only screen and (max-width: 600px) {
  .n-logo_sm{
    float: right;
    margin-top: -2.5%;
  }
  .sidebutton{
    display: inline-block;
    margin-top: -2%;
    font-size: 2.75rem !important;
  }
  .wrapper{
    width: 100%;
  }
  .wrapper > img{
    padding-right: 30%;
  }
}
</style>