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
    fetchUser: (context) => {

        // axios.get('/get-user').then(response => {
            // Login...
        // });
        // context.commit('setUser')
    },
}

const user  = {
    namespaced: true,
    state, 
    getters,
    mutations,
    actions
}

export default user