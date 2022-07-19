<template>
  <div class="header">
    <div v-if="this.$store.state.user.loggedIn">
    <p>ok</p>
    <button @click.prevent="signOut">SingOut</button>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";
// import {auth} from "@/fierbase";s

export default {
  name: "HeaderBlock",
  computed:{
    ...mapGetters['getUser'],

  },
  methods:{
    ...mapActions['logOut'],
    signOut() {
      if (this.$store.state.user.loggedIn) {
        this.$store.dispatch('logOut')
      }
    },

    }
}
</script>

<style scoped lang="scss">
@import "./Header.scss";
</style>