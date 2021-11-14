<template>
    <div class ="base-layout">
    <navigation></navigation>
      <router-view></router-view>
    </div>


</template>

<script>
import Navigation from "@/navigation";

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>
.base-layout {
  height: 100vh;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
</style>
