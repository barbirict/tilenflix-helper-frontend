<template>
  <va-card class="main">
    <va-card-title>User Editor</va-card-title>
    <va-divider/>
    <va-checkbox v-model="modeNew" label="Create new user"></va-checkbox>
    <va-form  tag="form" @submit.prevent="handleSubmit">
    <div class="editor" v-if="modeNew === true" >
      <div class="inputArea">
      <va-input class="mb-2 inputField" v-model="user.username" label="Username"/>
      <va-input class="mb-2 inputField" type="password" v-model="user.password" label="Password"/>
      <va-input class="mb-2 inputField" type="email" v-model="user.email" label="E-mail"/>
      <va-input class="mb-2 inputField" v-model="user.name" label="Name"/>
      <va-input class="mb-2 inputField" v-model="user.surname" label="Surname"/>
      </div>
      <div class="userImgWrapper">
        <img class="userImg" :src="imgPath">
      </div>
      <div class="roles">
        <h3>Roles</h3>
        <div class="checkboxWrapper">
        <va-checkbox class="checkbox" v-model="user.roles" array-value="User" label="User"></va-checkbox>
        <va-checkbox class="checkbox" v-model="user.roles" array-value="Moderator" label="Moderator"></va-checkbox>
        <va-checkbox class="checkbox" v-model="user.roles" array-value="Service_user" label="Service user"></va-checkbox>
        <va-checkbox class="checkbox" v-model="user.roles" array-value="Admin" label="Admin"></va-checkbox>
        </div>

      </div>
      <va-button type="submit" size="small" class="buttonSubmit">Submit</va-button>

    </div>


    </va-form>

  </va-card>
</template>

<script>
import Cookies from "js-cookie";
import userService from "@/components/scripts/userService/userService";
export default {
  name: "userEditorCard",
  data() {
    let user = {
      username: "",
      password: "",
      email: "",
      name: "",
      surname: "",
      roles: [],
    }
    return {modeNew: false, modeEdit: false, user, imgPath: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"}
  },
  methods: {
    handleSubmit(){
      userService.new(this.user, Cookies.get("session")).then(response => {
        if(response.status === 200){
          console.log("ok")
        }
        else console.log(response)
      })
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 10px;
  padding-left: 10px;
}
.inputArea {
  display: inline-block;
  width: 75%;
  margin-top: 10px;
}
.inputField {
  display: inline-block;
  width: 200px;
  margin-inline-end: 10px;
}

.userImgWrapper {
  float: right;
  width: 25%;
}

.userImg {
  border-radius: 100%;
  height: 110px;
  width: 110px;
  margin-top: 5px;
}
.checkboxWrapper{
  width: 100%;
}
.checkbox{
  display: inline-block;
  margin-inline-end: 10px;
}
.roles{
  margin-bottom: 15px;
}

.roles h3 {
  padding-inline-start: 5px;
  padding-bottom: 5px;
}

.buttonSubmit {

}
</style>