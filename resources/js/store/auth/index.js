import axios from 'axios'

const state = () => ({
    user: null,
    token: null
})

const getters = {
    getUser: (state) => state.user
}
const mutations = {
    setUser:  (state) => state.user = 'admin',
    setUserToken:  (state, data) => state.token = data
}

const actions = {
    login: (context) => {
        axios.get('/login').then(response => {
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