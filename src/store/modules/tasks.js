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
        mutations: {
            profileReducer(state, profile) {
                state.profile = profile
            },
            tasksReducer(state, tasks) {
                state.tasks = tasks
            },
            worksReducer(state, works) {
                state.works = works
            },
        },
        state: {
            profile: {},
            tasks: [],
            works: []
        },
        getters: {
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
    }
}