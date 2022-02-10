<template>
<va-card class="cardd">
  <va-card-title>Request form</va-card-title>
  <va-divider/>
  <va-form class="frm">
    <div class="radio-wrapper ma-2">
    <va-radio
        v-for="(option, index) in options"
        :key="index"
        v-model="type"
        :option="option"
        @update:model-value="clearSelOnChange"
    />
    </div>
    <div class="input-wrapper-top">
    <!--<va-input class="mb-0 ma-2 long" v-model="title" label="Title" placeholder="eg. Content Title" :rules="[(v) => v.length > 2 || ``]"/>-->
      <va-select class="mb-0 ma-2 long" v-model="title" label="Title" :options="titleSel" @update-search="searchTitle" v-on:update:modelValue="autoYear" searchable/>
    <va-input type="number" class="mb-0 ma-0 short" v-model="year" label="year" placeholder="eg. 2003" />
    </div>
    <div class="input-wrapper-mid">
    <va-input type="number" class="mb-0 ma-2 long"  v-model="season" label="season" :disabled="type == 'Movie'" placeholder="eg. 2"/>
    <va-input type="number" class="mb-0 ma-0 short" v-model="episode" label="Episode" :disabled="type != 'TV Show (Episode)'" placeholder="eg. 3"/>
    </div>
    <va-input class="mb-0 ma-2 stretch" v-model="comment" type="textarea" label="Comment" max-rows="3" placeholder="Not required s"/>
    <va-button class="ma-2">Submit</va-button>
  </va-form>
  <div class="img-wrapper">
  <img :src="imgSel">
  </div>
</va-card>
</template>

<script>
import Cookies from "js-cookie";
import requestService from "@/components/scripts/requestService/requestService";
export default {
  name: "formCard",
  data(){
    return {options: ["Movie", "TV Show (Season)", "TV Show (Episode)"], type: "Movie",
      title:"", year:"", episode:"", season:"", comment:"", titleSel: [], selectionData: [], imgSel: ""}
  },
  methods:{
    searchTitle(query){
      console.log("NOT t" + query)
    if(this.type === "Movie"){
      requestService.getMovies(query, Cookies.get("session"))
      .then(response => {
        if(response.status === 200){
          this.titleSel = []
          this.selectionData = response.data.results
          for(let i = 0; i < this.selectionData.length; i++){
            this.titleSel.push(this.selectionData[i].title)
          }
          console.log(this.titleSel)
        }

        })
          .catch(err =>{
            console.log(err)
      })
    }
    else{
      requestService.getTv(query, Cookies.get("session"))
          .then(response => {
            if(response.status === 200){
              this.titleSel = []
              this.selectionData = response.data.results
              for(let i = 0; i < this.selectionData.length; i++){
                this.titleSel.push(this.selectionData[i].name)
              }
              console.log(this.titleSel)
            }

          })
          .catch(err =>{
            console.log(err)
          })

    }
    },
    autoYear(){

      for(let i = 0; i < this.selectionData.length; i++){
        if(this.type === "Movie") {
          if (this.selectionData[i].title === this.title) {
            this.imgSel= "https://image.tmdb.org/t/p/w500/"+this.selectionData[i].poster_path
            this.year = this.selectionData[i].release_date.substring(0, 4)
          }
        }
        else {
          if (this.selectionData[i].name === this.title) {
            this.imgSel= "https://image.tmdb.org/t/p/w500/"+this.selectionData[i].poster_path
            this.year = this.selectionData[i].first_air_date.substring(0, 4)
          }
        }
      }
    },
    clearSelOnChange(){
      this.selectionData = []
      this.titleSel = []
      this.title = ""
      this.year = ""
      this.comment = ""
      this.episode = ""
      this.season = ""
      this.imgSel = ""
    }
  }
}
</script>

<style scoped>
.cardd{
  height: 370px;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media only screen and (min-width: 600px) {
 .cardd{
   min-width: 562px;

 }
}
@media only screen and (max-width: 599px) {
  img {
    display: none;
    text-align: center;
  }

}

.frm {

  display: inline-block;
  float: left;
  margin-left: 20px
}
.radio-wrapper{

  font-size: 0.8em;
}
/*
.img-wrapper {

  display: inline-block;
  float: right;


}
 */
img {
  margin-top: 40px;
  height: 200px;
  width: 150px;
}
.long, .short {
  display: inline-block;
}
.short{
  width: 90px;
}
.long{
  width: 210px !important;
}
.stretch{
  width: 310px;
}
</style>