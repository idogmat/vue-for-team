import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "@/fierbase";
import router from "@/router/routes";

export default {
    actions: {
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
                    if(router.isReady && router.currentRoute.value.path === '/Login') {
                        router.push('/')
                    }
                }
            })
        }
    },
    mutations: {
        SET_USER(state,user){
            state.user=user
        },
        CLEAR_USER(state){
            state.user=null
        }
    },
    state: {
        user:null
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}
