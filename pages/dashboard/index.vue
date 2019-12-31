<template>
  <v-container v-if="user">
    <h2>Welcome {{fullname}}</h2>
    <div v-if="!user.is_admin">
      <h1>Not admin</h1>
    </div>
    <div v-else>
      <h1>Admin</h1>
      <div v-for="job of jobs" :key="job.id" >
        <span>{{job.company}}</span>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'

export default { 
  layout: 'dashboard',
  
  head () {
    return {
      title: 'Jobbase | Dashboard'
    }
  },

  async fetch({store, redirect}) {
    if (!store.state.auth.user) {
      redirect('/signin')
    }

    await store.dispatch('auth/fetch')
    await store.dispatch('jobs/fetchAllJob')
  },

  computed: {
    ...mapState({
      jobs: state => state.jobs.list,
      user: state => state.auth.user,
    }),

    fullname() {
      return `${this.$store.state.auth.user.first_name} ${this.$store.state.auth.user.last_name}`
    },
  }
}
</script>