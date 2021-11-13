<template>
    <div class ="base-layout">
    <navigation></navigation>
      <login></login>
    </div>


</template>

<script>
import Login from "@/components/views/login";
import Navigation from "@/navigation";

export default {
  name: 'App',
  components: {
    Navigation,
    Login
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
