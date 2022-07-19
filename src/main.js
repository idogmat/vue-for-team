import Vue from 'vue'
import App from './App.vue'
import router from "@/router/routes";
import store from "@/store/index"
import {auth} from "@/fierbase";


auth.onAuthStateChanged((auth,user) => {
    store.dispatch("fetchUser", user);
})
         new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");



//auth.onAuthStateChanged(function(user) {
//     if (!app) {
//         /* eslint-disable no-new */
//         app = new Vue({
//             store,
//             router,
//             render: h => h(App)
//         }).$mount('#app')
//     }
// })
