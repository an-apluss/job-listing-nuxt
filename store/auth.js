import cookies from 'js-cookie'
import api from '~/api/index'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

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
  async fetch({commit}) {
    try {
      const { data } = await api.auth.profile()
      commit('set', data)
      return data
    } catch ({response}) {
      commit('reset')
      return response.data
    }
  },

  async signin({commit}, user) {
    try {
      const { data } = await api.auth.signin(user)
      commit('set', data)
      const token = `Bearer ${data.access_token}`
      setAuthToken(token)
      cookies.set('Authorization', token, {expires: 7})
      return data
    } catch ({response}) {
      commit('reset')
      resetAuthToken()
      cookies.remove('Authorization')
      return response.data
    }
  },

  async register({commit}, user) {
    try {
      const { data } = await api.auth.register(user)
      commit('reset')
      return data
    } catch ({response}) {
      commit('reset')
      return response.data
    }
  },

  reset ({commit}) {
    commit('reset')
    resetAuthToken()
    cookies.remove('Authorization')
    return Promise.resolve()
  }
}