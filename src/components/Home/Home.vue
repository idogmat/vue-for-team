
<template>
  <div >
    <h1>Name of our young Coder: {{ this.$store.state.profile.profile.name }}</h1>
    <p>urLevel: {{ this.$store.state.profile.profile.lvl}}</p>
    <div>urSkills:</div>
    <ul v-for="el in this.$store.state.profile.profile.skills" :key="el">
      <li>{{ el }}</li>
    </ul>
    <img :src="this.$store.state.profile.profile.photo" alt="user.photo">
  </div>
<!--  <div v-else>чет в гет не отработал,это твоя вина</div>-->
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "HomePage",
  props: {

  },
  computed: mapGetters(["getProfile"]),
  methods: mapActions(["fetchProfile"]),
  async created() {
    await this.$store.dispatch('fetchProfile')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "Home";
img{
  width: 220px;
  height: 220px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
