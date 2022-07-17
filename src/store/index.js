import Vue from "vue";
import Vuex from 'vuex'
import router from "@/router/routes";
import {auth} from "@/fierbase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
// import axios from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
        actions: {
            async fetchProfile({commit}) {
                const res = await fetch(
                    'http://localhost:3000/Profile'
                )
                const profile = await res.json()
                //console.log(user);
                commit('profileReducer', profile)
            },

            async fetchTasks({commit}) {
                const res = await fetch(
                    'http://localhost:3000/Tasks'
                )
                const tasks = await res.json()
                console.log(res);
                commit('tasksReducer', tasks[0].Tasks)
            },
            async fetchWorks({commit}) {
                const res = await fetch(
                    'http://localhost:3000/Works'
                )
                const works = await res.json()
                console.log(works[0].Works);
                commit('worksReducer', works[0].Works)
            },
            //register/auth
            async login({commit},details){
                const {email,password} = details
                try{
                   const user = await signInWithEmailAndPassword(auth,email,password)
                    console.log(user)
                }catch (error) {
                    switch (error.code){
                        case 'auth/user-not-found':
                            alert('auth/user-not-found');
                            break;
                        case 'auth/wrong-password':
                            alert('auth/wrong-password');
                            break;
                        default:
                            alert("something wrong")
                    }
                    return
                }
                commit('SET_USER',auth.currentUser)
                console.log(auth)
                   router.push('/')
            },
            async logOut({commit}){
                try {
                    await signOut(auth)
                    commit('CLEAR_USER')
                    router.push('/Login')
                } catch (error) {
                    alert(error)
                }

            },
            async register({commit},details){
                const {email,password} = details
                try{
                    await createUserWithEmailAndPassword(auth,email,password)
                }catch (error) {
                    switch (error.code){

                        default:
                            alert("something wrong")
                    }
                    return
                }
                commit('SET_USER',auth.currentUser)
                router.push('/')
            },
            fetchUser({commit}){
                auth.onAuthStateChanged(async user =>{
                    if(user === null){
                        commit('CLEAR_USER')
                    }else{
                        commit('SET_USER',auth.currentUser)
                    }
                })
            }
        },
        mutations: {
            userReducer(state, user) {
                state.user = user
            },
            profileReducer(state, profile) {
                state.profile = profile
            },
            tasksReducer(state,tasks) {
                state.tasks = tasks
            },
            worksReducer(state,works) {
                state.works = works
            },
            SET_USER(state,user){
                state.user.data=user
                state.user.loggedIn=true
            },
            // SET_LOGGED_IN(state,value){
            //     state.user.loggedIn = value;
            // },
            CLEAR_USER(state){
                console.log(state.user)
                state.user.data = null
                state.user.loggedIn=false
            },
        },

        state: {
            user:{
                loggedIn:false,
                auth:"",
                data:null
            },
            userConnect:false,
            profile: {},
            tasks:[],
            works:[]
        },
        getters: {
            getUser(state) {
                return state.user
            },
            getProfile(state) {
                return state.profile
            },
            getTasks(state) {
                return state.tasks
            },
            getWorks(state) {
                return state.works
            },


        }
})