<template>
  <main-view></main-view>


</template>

<script>
import MainView from "@/components/views/mainView";
export default {
  name: 'App',
  mounted() {
    if(this.$cookies.isKey("testni")){
      console.log(this.$cookies.get("testni"))
    }
    else this.$cookies.set("testni","toDelaahha","1h")
  },
  components: {
    MainView,
  }
}
</script>

<style>
</style>
