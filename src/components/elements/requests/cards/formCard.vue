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
    />
    </div>
    <div class="input-wrapper-top">
    <va-input class="mb-0 ma-2 long" label="Title"/>
    <va-input class="mb-0 ma-0 short" label="year"/>
    </div>
    <div class="input-wrapper-mid">
    <va-input class="mb-0 ma-2 long"  label="season" :disabled="type == 'Movie'"/>
    <va-input class="mb-0 ma-0 short" label="Episode" :disabled="type != 'TV Show (Episode)'"/>
    </div>
    <va-input class="mb-4 ma-2 stretch" v-model="test" type="textarea" label="Comment" max-rows="2"/>

  </va-form>
  <div class="img-wrapper">
  <img src="aa">
  </div>
</va-card>
</template>

<script>
export default {
  name: "formCard",
  data(){
    return {options: ["Movie", "TV Show (Season)", "TV Show (Episode)"], type: "Movie", test: ""}
  }
}
</script>

<style scoped>
.cardd{
  height: 350px;
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
img-wrapper {

  display: inline-block;
  float: right;

}
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
  width: 210px;
}
.stretch{
  width: 310px;
}
</style>