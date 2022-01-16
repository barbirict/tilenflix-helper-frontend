<!--TODO: Fix transitions between LG/XL to MD/SM/XL-->
<!--TODO: Fix logo margins-->
<template>
  <va-navbar>
    <template #left>
      <div class="wrapper">
        <va-icon class="sidebutton" v-on:click="clickHandler" :name="ico" />
      <img class="n-logo_sm" src="@/assets/logo.png">
      </div>

    </template>
    <template #center>
      <img class="n-logo_md" src="@/assets/logo.png">
    </template>
    <template #right>
    <p>Height: {{height}}</p>
      <p>Width: {{width}}</p>
    </template>
  </va-navbar>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return{
      ico: "menu",
      height: window.innerHeight,
      width: window.innerWidth
    }
  },
  created() {
    this.emitter.on('changeIco', () => {
      this.iconSwitch()
    })
    window.addEventListener("resize", this.returnSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.returnSize);
  },

  methods:{
    clickHandler(){
      this.emitter.emit('sidebarSwitch')
      this.iconSwitch()
    },
    iconSwitch(){
      if(this.ico === "menu_open") this.ico="menu"
      else this.ico = "menu_open"
    },
    returnSize(){
      this.height = window.innerHeight
      this.width = window.innerWidth
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
.n-logo_md{
  height: 50px;
  display: none;
}

.sidebutton{
 float: left;
  display: none;
}
@media only screen and (max-width: 768px) {
  .n-logo_sm{
    float: right;
    margin-top: -8px;
  }
  .sidebutton{
    display: inline-block;
    margin-top: -8px;
    font-size: 2.75rem !important;
  }
  .wrapper{
    width: 100%;
  }
  .wrapper > img{
    margin-right: 33%;
  }
}
@media only screen and (min-width: 769px) and (max-width: 991px) {
.n-logo_sm{
  display: none;
}
  .n-logo_md{
    display: block;
    margin-right: -20vw;
  }
  .sidebutton{
    display: inline-block;
    margin-top: -8px;
    font-size: 2.75rem !important;
  }
}
</style>