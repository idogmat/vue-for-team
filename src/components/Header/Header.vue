<template>
  <div class="header">
    <div v-if="correctShow">
    <p>{{$store.state.user.email}}</p>
    <button @click.prevent="signOut">SingOut</button>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";
//import {getAuth,onAuthStateChanged,signOut} from "fierbase/auth";

export default {
  name: "HeaderBlock",
  computed:{
    ...mapGetters['getUser'],
    correctShow(){
     return this.$store.state.user != null
    }

  },
  methods:{
    ...mapActions['fetchUser','logOut'],
    signOut() {
      if (this.$store.state.user !== null) {
        this.$store.dispatch('logOut')
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "./Header.scss";
</style>