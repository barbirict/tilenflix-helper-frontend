<template>
  <span>
  <div class="row recent">
    <div v-bind:class="{'offset--xl2':sidebarShown, 'offset--lg2':sidebarShown && !sidebarHover}" class="flex xs12 sm12 md12 lg6 xl5 kura">
      <!--<va-button style="width: 100%" v-on:click="handleClick"></va-button>-->
  <recent-card></recent-card>
      </div>
    <div class="flex lg3 xl2 novice_lg">
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
    </div>
    </span>
</template>

<script>
import RecentCard from "@/components/elements/dashboard/first/cards/recents/recentCard";
import NewsDisplayCard from "@/components/elements/dashboard/first/cards/news/newsDisplayCard";

export default {
  name: "dashFirst",
  components: {NewsDisplayCard, RecentCard},
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
  margin-top: 1vh;
}
.novice_lg{
  margin-left: 10px;
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

</style>