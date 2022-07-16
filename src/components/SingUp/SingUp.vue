<template>
  <div>
    <h1>Create Account</h1>
    <p>
      <input type="text" placeholder="Email" v-model="user.email">
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="user.password">
    </p>
    <p>
      <button @click="register">singUp</button>
    </p>
  </div>
</template>

<script>
//import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
export default {
  name: "SingUp",
  data(){
    return{
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods:{
    register(){
      this.$store.dispatch('login',this.user)
    },
    // register(){
    //   createUserWithEmailAndPassword(getAuth(),this.email,this.password)
    //       .then((res)=>{
    //         this.$router.push("/")
    //         console.log("SingUp completed",res)
    //       })
    //       .catch((error)=>{
    //         console.log("SingUp fail" ,error)
    //       })
    // }
  }
}
</script>

<style scoped>

</style>