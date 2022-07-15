
<template>
  <main class="main-container">
    <Header/>
    <div class="main-block">
      <section class="navbar-section">
      <Navbar/>
    </section>
    <section class="view-section">
      <router-view/>
    </section>
    </div>
  </main>
</template>

<script>

import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";

export default {
  name: 'App',
  components:{
    Navbar,Header
  },

}
</script>

<style lang="scss">
@import "@/App.scss";

</style>
