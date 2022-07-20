import Vue from "vue";
import Vuex from 'vuex';
import profile from "@/store/modules/profile";
import user from "@/store/modules/user";
import tasks from "@/store/modules/tasks";
import works from "@/store/modules/works";
// import axios from 'axios'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        profile,
        user,
        tasks,
        works
    }
})