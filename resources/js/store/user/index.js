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
        context.commit('setUser')
    }
}

const user  = {
    namespaced: true,
    state, 
    getters,
    mutations,
    actions
}

export default user