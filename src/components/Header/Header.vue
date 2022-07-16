<template>
  <div class="header">
    <div v-if="$store.state.user != null">
    <p>{{$store.state.user.email}}</p>
    <button @click.prevent="signOut">SingOut</button>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";
export default {
  name: "HeaderBlock",
  data(){
    return{
      show:this.$store.state.user
    }
  },
  computed:{
    ...mapGetters['getUser']

  },
  methods:{
    ...mapActions['fetchUser','logOut'],
    signOut() {
      if (this.$store.state.user !== null) {
        this.$store.dispatch('logOut')
      }
    }
  },
  async beforeMount() {
    this.$store.dispatch('fetchUser')
    console.log('k')
  }
}
</script>

<style scoped lang="scss">
@import "./Header.scss";
</style>