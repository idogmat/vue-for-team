<template>
  <div class="header">
    <div class="log-section" v-if="this.$store.state.user.user.loggedIn">
    <p> Hello, {{this.$store.state.user.user.data.email}}!</p>
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
    ...mapGetters(['getUser']),

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
.log-section{
  display: flex;
  justify-content: end;
}
</style>