export default {
    actions: {
        async fetchWorks({commit}) {
            const res = await fetch(
                'http://localhost:3000/Works'
            )
            const works = await res.json()
            console.log(works);
            commit('worksReducer', works)
        },
    },
    mutations: {
        worksReducer(state,works) {

            state.works = works
        },
    },
    state: {
        works: []
    },
    getters: {
        getWorks(state) {
            return state.works
        },
    }
}
