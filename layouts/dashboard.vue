<template>
  <v-app>
    <div>
      <v-toolbar dark class="white" v-if="user">
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-bold black--text">JOBBASE</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="/dashboard" nuxt class="teal--text mr-3 text-capitalize" color="white" small>Profile</v-btn>
        <div v-if="user.is_admin">
          <v-btn href="/jobs/create" nuxt class="teal--text mr-3 text-capitalize" color="white" small>create</v-btn>
          <v-btn href="/jobs" nuxt class="teal--text mr-3 text-capitalize" color="white" small>Jobs</v-btn>
        </div>
        <div v-else>
          <v-btn href="/jobs" nuxt class="teal--text mr-3 text-capitalize" color="white" small>Jobs</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <v-btn class="teal--text mr-5 text-capitalize" @click="logOut" color="white" small>Logout</v-btn>
      </v-toolbar>
    </div>
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({store}) {
    await store.dispatch('auth/fetch')
  },

  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/reset').then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
