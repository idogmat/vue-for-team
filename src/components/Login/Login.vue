<template>
  <div>
    <h1>Login</h1>
    <p>
      <input type="text" placeholder="Email" v-model="user.email">
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="user.password">
    </p>
    <p>
      <button @click="login">login</button>
    </p>
    <p v-if="errMsg">{{errMsg}}</p>
  </div>
</template>

<script>
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "LoginPage",
  data(){
    return{
      user: {
        email: "",
        password: "",
      },
      errMsg:""
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',this.user)
    },
    // singIn(){
    //   signInWithEmailAndPassword(getAuth(),this.email,this.password)
    //       .then((res)=>{
    //         this.$router.push("/")
    //         console.log("SingUp completed",res)
    //       })
    //       .catch((error)=>{
    //         console.log("SingUp fail" ,error)
    //         this.errMsg = error
    //       })
    // }
  }
}
</script>

<style scoped>

</style>