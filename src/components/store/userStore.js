import {createStore} from "vuex";

export default createStore({
    state: {
        user: null,
        csrfToken: (Math.random() * 100000000000000000).toString()
    },
    getters: {
        getUser: state => {
            return state.user
        },
        getCsrf: state => {
            return state.csrfToken
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    }
})