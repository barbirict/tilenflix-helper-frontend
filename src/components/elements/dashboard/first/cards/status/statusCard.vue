<template>
<va-card class="status">
  <va-card-title>Server status</va-card-title>
  <va-divider></va-divider>
  <div class="server_stat">
    <va-icon name="ondemand_video"></va-icon>
    <h1>Plex server</h1>
    <p>ONLINE</p>
  </div>
  <div class="web_server_stat">
    <va-icon name="public"></va-icon>
    <h1>Web services</h1>
    <p>OFFLINE</p>
  </div>
</va-card>
</template>

<script>
export default {
  name: "statusCard"
}
</script>

<style scoped>
.status{
  display: block;
  width: 96%;
  margin-left: 20px;
  margin-top: 20px;
  height: 160px;
  text-align: center;
}
.server_stat{
  display: inline-block;
  width: 50%;
}
.server_stat > p {
  color: #08ff00;
}
.web_server_stat{
  display: inline-block;
  width: 50%;
}
.web_server_stat > p {
  color: red;
}

</style>