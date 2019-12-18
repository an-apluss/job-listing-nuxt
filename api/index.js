import axios from 'axios'

export default {
  auth: {
    signin: (data) => axios.post('auth/signin', data),
    register: (data) => axios.post('auth/signup', data),
  },
  job: {
    postJob: (data) => axios.post('job', data),
    getAllJob: () => axios.get('jobs'),
    getSpecificJob: (id) => axios.get(`job/${id}`),
    deleteSpecificJob: (id) => axios.get(`job/${id}`),
    updateSpecificJob: (id, data) => axios.post(`job/${id}`, data),
  }
}