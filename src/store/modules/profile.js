export default {
    actions: {
        async fetchProfile({commit}) {
            const res = await fetch(
                'http://localhost:3000/Profile'
            )
            const profile = await res.json()
            //console.log(user);
            commit('profileReducer', profile)
        },

    },
    mutations: {
        profileReducer(state, profile) {
            state.profile = profile
        },


    },
    state: {
        profile: {},


    },
    getters: {
        getProfile(state) {
            return state.profile
        },


    }
}