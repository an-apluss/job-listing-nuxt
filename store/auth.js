import api from '~/api/index'

export const state = () => ({
  user: null
})

export const mutations = {
  set(state, user) {
    state.user = user
  },

  reset(state) {
    state.user = null
  }
}

export const actions = {
   async signin({commit}, user) {
    try {
      const { data } = await api.auth.signin(user)
      commit('set', data)
      return data
    } catch ({response}) {
      commit('reset')
      return response.data
    }
  }
}