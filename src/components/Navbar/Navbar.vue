
<template>
  <ul class="nav">
    <li v-for="(el,i) in routers"  :key="i">
      <router-link class-active="active" :to="el.path">{{ el.name }}</router-link>
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
  }
}
</script>

<style scoped lang="scss">
@import "./Navbar.scss";

</style>