import cookie from 'cookie'
import { setAuthToken, resetAuthToken } from '~/utils/auth'
import axios from 'axios'

export const actions = {
  nuxtServerInit({dispatch}, context) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(context.req.headers.cookie || '')

      if ('Authorization' in cookies) {
        setAuthToken(cookies['Authorization'])
        dispatch('auth/fetch')
          .then(result => {
            resolve(true)
          })
          .catch(error => {
            console.log('Provided token is invalid:', error)                       
            resetAuthToken()
            resolve(false)
          })
      }else{
        resetAuthToken()
        resolve(false)
      }
    })
  }
}