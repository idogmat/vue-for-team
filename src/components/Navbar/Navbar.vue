
<template>
  <ul class="nav">
    <li>
      <router-link v-if="resAuthUser" class-active="active" to="/"> Home </router-link>
    </li>
    <li>
      <router-link v-if="resAuthUser" class-active="active" to="/learn"> Learn </router-link>
    </li>
    <li>
      <router-link v-if="resAuthUser" class-active="active" to="/Works"> Works </router-link>
    </li>
    <li>
      <router-link v-if="resAuthUser" class-active="active" to="/Tasks"> Tasks </router-link>
    </li>
    <li>
      <router-link v-if="!resAuthUser" class-active="active" to="/Registration">Registration</router-link>
    </li>
    <li>
      <router-link v-if="!resAuthUser" class-active="active" to="/Login">Login</router-link>
    </li>
  </ul>
</template>

<script>
import {routers} from "@/router/routes"
import {auth} from "@/fierbase";
export default {
  name: "NavBar",
  data(){
    return{
      routers,
      isLoggedIn:false
    }
  },
  computed:{
    resAuthUser(){
     return this.isLoggedIn
    }
  },
  created() {
    if (auth.currentUser) {
      console.log(auth.currentUser)
      this.isLoggedIn = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "./Navbar.scss";

</style>