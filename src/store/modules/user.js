import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "@/fierbase";
import router from "@/router/routes";

export default {
    actions: {
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
            //console.log(auth)
            router.push('/').catch(()=>{});
        },
        async logOut({commit}){
            try {
                await signOut(auth)
                commit('CLEAR_USER')
                router.push('/Login').catch(()=>{});
            } catch (error) {
                alert(error)
            }

        },
        async register({commit},details){
            const {email,password} = details
            try{
                await createUserWithEmailAndPassword(auth,email,password)
                router.push('/').catch(()=>{});
            }catch (error) {
                switch (error.code){
                    default:
                        alert("something wrong")
                }
                return
            }
            commit('SET_USER',auth.currentUser)
            router.push('/').catch(()=>{});
        },
        fetchUser({commit}){
            auth.onAuthStateChanged(async user =>{
                if(user === null){
                    commit('CLEAR_USER')
                }else{
                    commit('SET_USER',auth.currentUser)
                    router.push('/').catch(()=>{});
                }
            })
        }
    },
    mutations: {
        SET_USER(state,user){
            state.user.data=user
            state.user.loggedIn=true
        },
        SET_LOGGED_IN(state,value){
            state.user.loggedIn = value;
        },
        CLEAR_USER(state){
            state.user.data = null
            state.user.loggedIn=false
        },
    },
    state: {
        user:{
            loggedIn:false,
            data:null
        },
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}
