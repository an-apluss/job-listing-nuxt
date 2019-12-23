<template>
   <div>
    <v-container >
      <v-btn @click="previouRoute" class="ma-2" color="orange darken-2" dark>
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>
      <v-row align="center">
        <v-col
          cols="12"
        >
          <v-card
            class="pa-2"
          >
            <v-card-text class="teal white--text">
              <h1>{{job.company}}</h1>
            </v-card-text>
            <v-card-text>
              <h3>Job Title</h3>
              <p class="mt-1">
                {{job.title}}
              </p>
              <h3>Industry</h3>
              <p class="mt-1">
                {{job.industry}}
              </p>
              <h3>Job Description</h3>
              <p class="mt-1">
                {{job.description}}
              </p>
              <h3>Salary</h3>
              <p class="mt-1">
                #{{job.salary}}
              </p>
              <h3>Location</h3>
              <p class="mt-1">
                {{job.location}}
              </p>
              <h3>Job Type</h3>
              <p class="mt-1">
                {{job.job_type}}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
   </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Jobbase | Job Details'
    }
  },

  async fetch({store, params}) {
    await store.dispatch('jobs/fetchSpecificJob', {id: params.id})
  },

  computed: {
    ...mapState({
      job: state => state.jobs.job
    })
  },

  methods: {
    previouRoute() {
      this.$router.back()
    }
  }
}
</script>
