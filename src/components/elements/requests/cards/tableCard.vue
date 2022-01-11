<template>
    <va-data-table :columns="columns" :items="items">
      <!--<template #header(item_o.title)>Title</template>
      <template #header(item_o)>Type</template>

      <template #cell(item_o.title)="{ source: item_o }">{{ item_o.title }}</template>
      <template #cell(item_o)="{ source: item_o }">{{ item_o.type}}</template>-->
    </va-data-table>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "tableCard",
  data() {
    const sampleData = [
      {
        id: "REQ000001",
        item_o: {
          title: "It's always sunny in philadelphia",
          type: "tv-show",
          season: "3",
          episodes: "24",
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
          episode: "1",
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
      {key: "id"},
      {key: "title", value:"item_o.title", text: "Title"},
      {key: "status"},
      {key: "date"},
    ]

    return {items: sampleData,
      columns,
    }
  },
})
</script>

<style scoped>

</style>