<template>
  <div class="header">
    <div v-show="logCheck">
    <p>ok</p>
    <button @click.prevent="signOut">SingOut</button>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";
import {auth} from "@/fierbase";

export default {
  name: "HeaderBlock",
  data(){
    return {
      isLoggedIn: false
    }
  },
  computed:{
    ...mapGetters['getUser'],
    logCheck(){
      let res
      if (this.isLoggedIn) {
        res = true;
      } else {
        res = false;
      }
      return res
    }
  },
  methods:{
    ...mapActions['logOut'],
    signOut() {
      if (this.isLoggedIn) {
        this.isLoggedIn = false
        this.$store.dispatch('logOut')
      }
    },

    },
    created() {
      if (auth.currentUser) {
        this.isLoggedIn = true;
      }
    }
}
</script>

<style scoped lang="scss">
@import "./Header.scss";
</style>