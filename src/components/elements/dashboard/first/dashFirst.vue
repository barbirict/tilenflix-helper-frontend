<template>
  <span>
  <div class="row recent">
    <div v-bind:class="{'offset--xl2':sidebarShown, 'offset--lg2':sidebarShown && !sidebarHover}" class="flex xs12 sm12 md12 lg6 xl5 kura">
      <!--<va-button style="width: 100%" v-on:click="handleClick"></va-button>-->
  <recent-card></recent-card>
      </div>
    <div class="flex novice_lg">
      <news-display-card></news-display-card>
    </div>
  </div>
    <div class="row recent">
      <div v-bind:class="{'offset--xl2':sidebarShown, 'offset--lg2':sidebarShown && !sidebarHover}" class="flex xs12 sm12 md12 lg6 xl5 kura">
      <recent-card></recent-card>
      </div>
      <div class="flex xs12 sm12 md12 novice_sm">
      <news-display-card></news-display-card>
    </div>
      <div class="flex  reqreq"><requests-card></requests-card><status-card></status-card></div>
      <div class="flex statt"></div>
    </div>
    </span>
</template>

<script>
import RecentCard from "@/components/elements/dashboard/first/cards/recents/recentCard";
import NewsDisplayCard from "@/components/elements/dashboard/first/cards/news/newsDisplayCard";
import RequestsCard from "@/components/elements/dashboard/first/cards/requests/requestsCard";
import StatusCard from "@/components/elements/dashboard/first/cards/status/statusCard";

export default {
  name: "dashFirst",
  components: {StatusCard, RequestsCard, NewsDisplayCard, RecentCard},
  data(){
    return {
      sidebarShown: true,
      sidebarHover: false,
      counter: 0
    }
  },
  created() {
    this.emitter.on('sidebarSwitch', () => {
      if(this.sidebarShown) this.sidebarShown = false
      else this.sidebarShown = true
    })/*
    this.emitter.on('sidebarHover', () => {
      this.counter++
      //alert("CUNT: " + this.counter  + " CUNT % 2: " + this.counter % 2 )
      if(this.sidebarHover) this.sidebarHover = false
      else this.sidebarHover = true
    })
    this.emitter.on('changedPerspective', () => {
      console.log("prejeto")
      this.counter++
      this.sidebarHover = false;
    })*/
  },
  updated() {
        this.sidebarHover = false;

  },
  methods:{
    handleClick(){
      console.log("SH: " + this.sidebarHover)
    }
  }
}
</script>

<style scoped>
.recent {
  margin-top: 20px;
}
.novice_lg{
  margin-left: 20px;
}

@media only screen and (max-width: 991px) {
  .novice_lg {
    display: none;
  }
  .novice_sm {
    display: block;
  }
}
@media only screen and (min-width: 992px) {
  .novice_lg {
    display: block;
  }
  .novice_sm {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {

  .reqreq{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }
  .novice_lg{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }
  .statt{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }

}

</style>