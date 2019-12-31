<template>
  <v-layout justify-center align-center>
    <v-card class="elevation-10" style="flex: 0 1 400px">
      <v-card-title>
        <nuxt-link to="/" class="font-weight-bold black--text">JOBBASE</nuxt-link>
      </v-card-title>
      <v-card-title class="headline">Log In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-alert 
            border="right"
            colored-border
            type="error"
            elevation="2"
            v-if="alert"
          >
            <div v-if="typeof errors == 'object'">
              <li v-if="errors.user_name">{{ errors.user_name[0] }}</li>
              <li v-if="errors.password">{{ errors.password[0] }}</li>
            </div>
            <div v-else>
              <li v-if="errors">{{ errors }}</li>
            </div>
          </v-alert>
          <v-text-field label="Username" color="teal" v-model="user_name"></v-text-field>
          <v-text-field label="Password" color="teal" v-model="password" type="password"></v-text-field>
          <v-btn block type="submit" class="mt-2" :loading="loading" :disabled="loading" color="teal" outlined large>
            <v-icon class="mr-2">mdi-login</v-icon>Sign In
          </v-btn>
          <div class="mt-3">
            <span class="mr-1">Don't you have account with us?</span>
            <nuxt-link to="/register" class="orange--text">Register</nuxt-link>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  layout: 'nonavigation',

  fetch({store, redirect}) {
    if (store.state.auth.user) {
      redirect('/dashboard')
    }
  },

  head () {
    return {
      title: 'Jobbase | Signin'
    }
  },

  data () {
    return {
      user_name: '',
      password: '',
      alert: false,
      loading: false,
      errors: []
    }
  },

  methods: {
    async submit () {
      this.alert = false
      this.loading = true
      const result = await this.$store.dispatch('auth/signin', {
        user_name: this.user_name,
        password: this.password
      })

      if (result.status === 'success') {
        this.alert = false
        this.loading = false
        this.$router.push('/dashboard')
      }else{
        this.alert = true
        this.loading = false
        this.errors = result.error
      }
    }
  }
}
</script>