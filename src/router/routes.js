import Home from "@/components/Home/Home";
import Learn from "@/components/Learn/Learn";
import Works from "@/components/Works/Works";
import Tasks from "@/components/Tasks/Tasks";
import SingUp from "@/components/SingUp/SingUp";
import Login from "@/components/Login/Login";
import {auth} from "@/fierbase";
import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router)
export const routers = [
    { path: '/',name:"Home",
        component: Home , meta:{requiresAuth:true}},
    { path: '/Learn',name:"Learn",
        component: Learn , meta:{requiresAuth:true}},
    { path: '/Works',name:"Works",
        component: Works , meta:{requiresAuth:true}},
    { path: '/Tasks',name:"Tasks",
        component: Tasks , meta:{requiresAuth:true}},
    { path: '/Registration',name:"Registration",
        component: SingUp, meta:{requiresGuest:true} },
    { path: '/Login',name:"Login",
        component: Login, meta:{requiresGuest:true} },
]
const router = new Router({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    mode: 'history',
    routes: routers, // short for `routes: routes`
})

    router.beforeEach((to, from, next) => {
        // Check for requiresAuth guard
        if (to.matched.some(record => record.meta.requiresAuth)) {
            // Check if NO logged user
            //console.log(this.store.state.user.loggedIn)
            console.log(auth)
            if (!auth.currentUser) {
                // Go to login
                next({
                    path: '/Login',
                });
            } else {
                // Proceed to route
                next();
            }
        } else if (to.matched.some(record => record.meta.requiresGuest)) {
            // Check if NO logged user
            if (auth.currentUser) {
                // Go to login
                next({
                    path: '/',
                });
            } else {
                // Proceed to route
                next();
            }
        } else {
            // Proceed to route
            next();
        }
    });
export default router