import axios from 'axios'

const state = () => ({
    user: null
})

const getters = {
    getUser: (state) => state.user
}
const mutations = {
    setUser:  (state) => state.user = 'admin'
}

const actions = {
    login: (context) => {
        axios.get('/login').then(response => {
            console.log(response)
            // Login...
        });
        // context.commit('setUser')
    },

    register: (context, credentials) => {
        axios.post('/register', credentials).then(response => {
            console.log(response)
            // Login...
        });
        // context.commit('setUser')
    },
}

const auth  = {
    namespaced: true,
    state, 
    getters,
    mutations,
    actions
}

export default auth