import api from '~/api/index'

export const state = () => ({
  list: [],
  job: {},
})

export const mutations = {
  index(state, jobs) {
    state.list = jobs
  },

  fetchOne(state, job) {
    state.job = job
  },

  reset(state) {
    state.list = []
    state.job = {}
  },

}

export const actions = {
  async fetchAllJob({commit}) {
    try {
      const { data } = await api.job.getAllJob()
      commit('index', data.data)
      return data.data
    } catch (error) {
      commit('reset')
    }
  },

  async fetchSpecificJob({commit}, params) {
    try {
      const { data } = await api.job.getSpecificJob(params.id)
      commit('fetchOne', data.data)
    } catch (error) {
      commit('reset')
    }
  }
}