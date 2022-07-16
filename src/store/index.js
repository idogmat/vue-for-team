import Vue from "vue";
import Vuex from 'vuex'
import router from "@/router/routes";
import {auth} from "@/fierbase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
//import user from './modules/user';
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
                //console.log(tasks);
                commit('tasksReducer', tasks)
            },
            async fetchWorks({commit}) {
                const res = await fetch(
                    'http://localhost:3000/Works'
                )
                const works = await res.json()
                console.log(works);
                commit('worksReducer', works)
            },
            //register/auth
            async login({commit},details){
                const {email,password} = details
                try{
                    await signInWithEmailAndPassword(auth,email,password)
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
                await signOut(auth)
                commit('CLEAR_USER')
                router.push('/Login')
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
                        commit('SET_USER')
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
                state.user=user
                state.userConnect=auth.currentUser
            },
            CLEAR_USER(state){
                state.user=null
                state.userConnect=auth.currentUser
            },
        },

        state: {
            user:null,
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