<template>
  <vue-good-table
      :columns="columns"
      :rows="rows"/>
</template>
<script>

import { defineComponent } from 'vue'

function itemsToFields(items){
  let rows = []
  for(let i = 0; i<items.length; i++){
    let sisn = "/"
    let epi = "/"
    if(items[i].item_o.season) sisn = items[i].item_o.episodes
    if (items[i].item_o.episodes) epi= items[i].item_o.episodes
    rows.push({id: items[i].id, title: items[i].item_o.title, type: items[i].item_o.type, season: sisn,
      episodes: epi, date: items[i].date, status: items[i].status})
  }
  console.log(rows)
  return rows
}

export default defineComponent({
  name: "tableCard",
  methods: {


  },
  data() {
    const sampleData = [
      {
        id: "REQ000001",
        item_o: {
          title: "It's always sunny in philadelphia",
          type: "tv-show",
          season: "3",
          episodes: "1-24",
        },
        date: "10-01-2022T23:30:52",
        status: "submit",
      },
      {
        id: "REQ000002",
        item_o: {
          title: "Star wars: Episode III",
          type: "movie"
        },
        date: "10-01-2022T22:30:40",
        status: "inprog",
      },
      {
        id: "REQ000003",
        item_o: {
          title: "Filthy frank show: Dade special",
          type: "tv-show-episode",
          season: "3",
          episodes: "1",
        },
        date: "08-01-2022T12:45:03",
        status: "finish",
      },
      {
        id: "REQ000004",
        item_o: {
          title: "The Boondocks",
          type: "tv-show",
          season: "4",
          episodes: "18",
        },
        date: "01-01-2022T21:15:21",
        status: "finish",
      },
    ]

    const columns = [
      {label: "id", field:"id"},
      {label: "title", field: "title"},
      {label: "type", field: "type"},
      {label: "season", field: "season"},
      {label: "episodes", field: "episodes"},
      {label: "date", field: "date", type: "date", dateInputFormat: "dd-MM-YYYYThh-mm-ss", dateOutputFormat: "dd MMM YYYY"},
      {label: "status", field: "status"}
    ]

    return {columns, rows: itemsToFields(sampleData)
    }
  },

})
</script>

<style scoped>

</style>