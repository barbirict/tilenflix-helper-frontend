import {createStore} from "vuex";

export default createStore({
    state: {
        user: null,
        csrfToken: null
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
        },
        setCsrf(state, token){
            state.csrfToken = token
        }
    }
})