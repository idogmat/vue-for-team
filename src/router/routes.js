import Home from "@/components/Home/Home";
import Learn from "@/components/Learn/Learn";
import Works from "@/components/Works/Works";
import Tasks from "@/components/Tasks/Tasks";
import SingUp from "@/components/SingUp/SingUp";
import Login from "@/components/Login/Login";
import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router)
export const routers = [
    { path: '/',name:"Home", component: Home },
    { path: '/learn',name:"Learn", component: Learn },
    { path: '/Works',name:"Works", component: Works },
    { path: '/Tasks',name:"Tasks", component: Tasks },
    { path: '/Registration',name:"Registration", component: SingUp },
    { path: '/Login',name:"Login", component: Login },
]
const router = new Router({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    mode: 'history',
    routes: routers, // short for `routes: routes`
})
export default router