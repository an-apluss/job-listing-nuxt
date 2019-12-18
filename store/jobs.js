import api from '~/api/index'

export const state = () => ({
  list: [],
})

export const mutations = {
  index(state, data) {
    state.list = data
  },

  reset(state) {
    state.list = []
  }
}

export const actions = {
  async fetchAllJob({commit}) {
    // await api.job.getAllJob()
    //   .then(response => {
    //     commit('get_all_job', response.data.data)
    //   })
    //   .catch(error => {
    //     commit('reset_job_list')
    //   })
    try {
      const { data } = await api.job.getAllJob()
      commit('index', data.data)
      return data.data
    } catch (error) {
      commit('reset')
    }
  }
}