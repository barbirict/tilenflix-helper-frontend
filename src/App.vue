<template>
  <main-view></main-view>


</template>

<script>
import MainView from "@/components/views/mainView";
export default {
  name: 'App',
  created() {
    this.$cookies.config("7d")
  },
  components: {
    MainView,
  }
}
</script>

<style>
</style>
