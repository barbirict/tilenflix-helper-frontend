<template>
  <va-card class="cardd">
    <va-card-title>Request form</va-card-title>
    <va-divider/>
    <form class="frm" @submit.prevent="beforeSubmit">
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
        <va-select class="mb-0 ma-2 long" v-model="title" label="Title" :options="titleSel" @update-search="searchTitle"
                   v-on:update:modelValue="autoYear" searchable/>
        <va-input type="number" class="mb-0 ma-0 short" v-model="year" label="year" placeholder="eg. 2003"/>
      </div>
      <div class="input-wrapper-mid">
        <va-input type="number" class="mb-0 ma-2 long" v-model="season" label="season" :disabled="type == 'Movie'"
                  placeholder="eg. 2"/>
        <va-input type="number" class="mb-0 ma-0 short" v-model="episode" label="Episode"
                  :disabled="type != 'TV Show (Episode)'" placeholder="eg. 3"/>
      </div>
      <va-input class="mb-0 ma-2 stretch" v-model="comment" type="textarea" label="Comment" max-rows="3"
                placeholder="Not required s"/>
      <va-button type="submit" class="ma-2">Submit</va-button>
    </form>
    <va-modal @ok="handleSubmit" v-model="beforeSub" title="Request confirmation" style="max-height: 30%!important;">
      <div class="lg12 modalTxt">
        <h3>title: </h3>
        <p>{{ title }}</p>
      </div>
      <div class="lg12 modalTxt">
        <h3>year: </h3>
        <p>{{ year }}</p>
      </div>
      <div class="modalTxt">
        <h3>Description: </h3>
        <p>{{ selectedM.overview }}</p>
      </div>
      <img class="inner-img" :src="imgSel" style="display:inline-block; align-self: auto"/>
    </va-modal>
    <div class="img-wrapper">
      <img :src="imgSel">
    </div>
  </va-card>
</template>

<script>
import Cookies from "js-cookie";
import requestService from "@/components/scripts/requestService/requestService";
import dayjs from "dayjs";

export default {
  name: "formCard",
  data() {
    return {
      options: ["Movie", "TV Show (Season)", "TV Show (Episode)"],
      type: "Movie",
      title: "",
      year: "",
      episode: "",
      season: "",
      comment: "",
      titleSel: [],
      selectedM: {},
      selectedT: {},
      selectionData: [],
      imgSel: "",
      beforeSub: false
    }
  },
  methods: {
    searchTitle(query) {
      if (query) {
        if (this.type === "Movie") {
          requestService.getMovies(query, Cookies.get("session"))
              .then(response => {
                if (response.status === 200) {
                  this.titleSel = []
                  this.selectionData = response.data.results
                  for (let i = 0; i < this.selectionData.length; i++) {
                    this.titleSel.push(this.selectionData[i].title)
                  }
                  console.log(this.titleSel)
                }

              })
              .catch(err => {
                console.log(err)
              })
        } else {
          requestService.getTv(query, Cookies.get("session"))
              .then(response => {
                if (response.status === 200) {
                  this.titleSel = []
                  this.selectionData = response.data.results
                  for (let i = 0; i < this.selectionData.length; i++) {
                    this.titleSel.push(this.selectionData[i].name)
                  }
                  console.log(this.titleSel)
                }

              })
              .catch(err => {
                console.log(err)
              })

        }
      }
    },
    autoYear() {

      for (let i = 0; i < this.selectionData.length; i++) {
        if (this.type === "Movie") {
          if (this.selectionData[i].title === this.title) {
            this.imgSel = "https://image.tmdb.org/t/p/w500/" + this.selectionData[i].poster_path
            //this.year = this.selectionData[i].release_date.substring(0, 4)
            this.year = dayjs(this.selectionData[i].release_date).format("YYYY")
            this.selectedM = this.selectionData[i]
            console.log(this.selectedM)
          }
        } else {
          if (this.selectionData[i].name === this.title) {
            this.imgSel = "https://image.tmdb.org/t/p/w500/" + this.selectionData[i].poster_path
            //this.year = this.selectionData[i].first_air_date.substring(0, 4)
            this.year = dayjs(this.selectionData[i].first_air_date).format("YYYY")
            this.selectedT = this.selectionData[i]
            console.log(this.selectedT)

          }
        }
      }
    },
    clearSelOnChange() {
      this.selectionData = []
      this.titleSel = []
      this.title = ""
      this.year = ""
      this.comment = ""
      this.episode = ""
      this.season = ""
      this.imgSel = ""
    },
    beforeSubmit() {
      if (this.title && this.year) {
        if (this.type === 'Movie') {
          this.beforeSub = true
        } else if (this.type === 'TV Show (Season)' && this.season) {
          this.beforeSub = true
        } else if (this.type === 'TV Show (Episode)' && this.season && this.episode) {
          this.beforeSub = true
        } else {
          this.$vaToast.init({
            message: '<span><va-icon class="material-icons">error</va-icon>  Data not entered!</span>',
            html: true,
            color: 'warning'
          })
        }
      } else {
        this.$vaToast.init({
          message: '<span><va-icon class="material-icons">error</va-icon>  Data not entered!</span>',
          html: true,
          color: 'warning'
        })
      }

    },
    handleSubmit() {
      let data = {}
      let item = {}
      if (this.type === 'Movie') {
        item = {
          type: "movie",
          title: this.title,
          year: this.year
        }
        if (this.comment) {
          data = {
            item: item,
            comment: this.comment
          }
        }
      } else if (this.type === 'TV Show (Season)') {
        item = {
          type: "tv-show",
          title: this.title,
          year: this.year,
          season: this.season
        }
        if (this.comment) {
          data = {
            item: item,
            comment: this.comment
          }
        } else data = {item: item}
      } else {
        item = {
          type: "tv-show-episode",
          title: this.title,
          year: this.year,
          season: this.season,
          episodes: this.episode
        }

        if (this.comment) {
          data = {
            item: item,
            comment: this.comment
          }
        } else data = {item: item}
      }

      requestService.newReq(data, Cookies.get('session'))
          .then(res => {
            if (res.status === 200) {
              this.$vaToast.init({
                message: '<span><va-icon class="material-icons">check_circle</va-icon>  Success!</span>',
                html: true,
                color: 'success'
              })
            } else {
              this.$vaToast.init({
                message: '<span><va-icon class="material-icons">error_circle</va-icon>  Error submitting request!</span>',
                html: true,
                color: 'warning'
              })
            }
          })
          .catch(err => {
            this.$vaToast.init({
              message: '<span><va-icon class="material-icons">error_circle</va-icon>  Error submitting request!</span>' + err,
              html: true,
              color: 'warning'
            })
          })
    }
  }
}
</script>

<style scoped>
.cardd {
  height: 370px;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media only screen and (min-width: 600px) {
  .cardd {
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

.radio-wrapper {

  font-size: 0.8em;
}

/*
.img-wrapper {

  display: inline-block;
  float: right;


}
 */
.modalTxt h3, p {
  text-align: center !important;
}

.inner-img {
  display: inline-block;
  margin-inline: 40%;
}

img {
  margin-top: 40px;
  height: 200px;
  width: 150px;
  border-radius: 5px;
}

.long, .short {
  display: inline-block;
}

.short {
  width: 90px;
}

.long {
  width: 210px !important;
}

.stretch {
  width: 310px;
}
</style>