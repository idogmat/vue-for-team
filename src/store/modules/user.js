// export default {
//     actions: {
//         async fetchUser({commit}) {
//             const res = await fetch(
//                 'http://localhost:3000/User'
//             )
//             const user = await res.json()
//             //console.log(user);
//             commit('userReducer', user)
//         },
//
//         async fetchTasks({commit}) {
//             const res = await fetch(
//                 'http://localhost:3000/Tasks'
//             )
//             const tasks = await res.json()
//             //console.log(tasks);
//             commit('tasksReducer', tasks)
//         },
//         async fetchWorks({commit}) {
//             const res = await fetch(
//                 'http://localhost:3000/Works'
//             )
//             const works = await res.json()
//             console.log(works);
//             commit('worksReducer', works)
//         }
//     },
//     mutations: {
//         userReducer(state, user) {
//             state.user = user
//         },
//         tasksReducer(state,tasks) {
//             state.tasks = tasks
//         },
//         worksReducer(state,works) {
//             state.tasks = works
//         }
//     },
//
//     state: {
//         user: {},
//         tasks:[],
//         works:[]
//     },
//     getters: {
//         getUser(state) {
//             return state.user
//         },
//         getTasks(state) {
//             return state.tasks
//         },
//         getWorks(state) {
//             return state.works
//         }
//
//     }
// }
