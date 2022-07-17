
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
export default {
  name: "NavBar",
  data(){
    return{
      routers
    }
  },
  computed:{
    resAuthUser(){
     return this.$store.state.user.loggedIn
    }
  }
}
</script>

<style scoped lang="scss">
@import "./Navbar.scss";

</style>