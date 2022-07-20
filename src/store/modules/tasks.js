export default {
    actions: {

        async fetchTasks({commit}) {
            const res = await fetch(
                'http://localhost:3000/Tasks'
            )
            const tasks = await res.json()
            console.log(res);
            commit('tasksReducer', tasks)
        }

        },
        mutations: {

            tasksReducer(state, tasks) {
                state.tasks = tasks
            },

        },
        state: {
            tasks: [],

        },
        getters: {

            getTasks(state) {
                return state.tasks
            },

        }
    }
