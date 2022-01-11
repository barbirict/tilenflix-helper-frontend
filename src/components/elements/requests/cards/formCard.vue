<template>
<va-card>
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
    <va-input class="mb-0 ma-2 long"  label="season"/>
    <va-input class="mb-0 ma-0 short" label="Episode" disabled/>
    </div>
    <va-input class="mb-4 ma-2 stretch" v-model="test" type="textarea" label="Comment" max-rows="2"/>
    <img src="aa">
  </va-form>

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
.frm {
  height: 350px;
}
.radio-wrapper{

  font-size: 0.8em;
}
img {
  display: inline-block;
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