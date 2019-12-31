<template>
  <div v-if="user">
    <h1>Available Jobs</h1>
    <div v-if="user.is_admin">
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Company Name</th>
              <th class="text-left">Job Title</th>
              <th class="text-left">Job Industry</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="job in jobs" :key="job.id">
              <td>{{ job.company }}</td>
              <td>{{ job.title }}</td>
              <td>{{ job.industry }}</td>
              <td>
                <v-btn class="" outlined color="gray">Edit</v-btn>
                <v-btn outlined color="error">Delete</v-btn>
              </td> 
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-else>
      <v-row align="center">
        <v-col
          v-for="job in jobs"
          :key="job.id"
          cols="12"
          xl="3"
          lg="4"
          md="6"
          sm="10"
          xs="12"
        >
          <v-card
            class="pa-2"
          >
            <v-card-text class="teal white--text">
              <h2>{{job.company}}</h2>
              <div class="mt-2">
                <p>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn class="text-center" fab dark x-small color="white">
                          <v-icon color="orange" size="18" v-on="on">mdi-account-badge</v-icon>
                        </v-btn>
                    </template>
                    <span>Job Role</span>
                  </v-tooltip>
                  {{job.title}}
                </p>
              </div>
            </v-card-text>
            <v-card-text>
              <p>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> 
                    <v-icon color="orange" size="18" left v-on="on">mdi-factory</v-icon>
                  </template>
                  <span>Job industry</span>
                </v-tooltip>
                {{job.industry}}
              </p>
              <p>
                <span 
                  v-if="job.description.length > 30"
                  class="d-inline-block text-truncate"
                  style="max-width: 100%;"  
                >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> 
                    <v-icon color="orange" size="18" left v-on="on">mdi-account-card-details</v-icon>
                  </template>
                  <span>Job Description</span>
                </v-tooltip>
                  {{job.description}}
                </span>
                <span
                  v-else 
                >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> 
                    <v-icon color="orange" size="18" left v-on="on">mdi-account-card-details</v-icon>
                  </template>
                  <span>Job Description</span>
                </v-tooltip>
                  {{job.description}}
                </span>
              </p>
              <p>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> 
                    <v-icon color="orange" size="18" left v-on="on">mdi-cash-multiple</v-icon>
                  </template>
                  <span>Job Salary</span>
                </v-tooltip>
                #{{job.salary}}
              </p>
              <p>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> 
                    <v-icon color="orange" dark size="18" left v-on="on">mdi-crosshairs-gps</v-icon>
                  </template>
                  <span>Company Location</span>
                </v-tooltip>
                {{job.location}}
              </p>
            </v-card-text>
            <div class="text-center">
              <v-btn :href="`jobs/${job.id}/view`" color="white" class="text-capitalize mr-3" small>Details</v-btn>
              <v-btn color="white" class="text-capitalize" small>Apply</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default { 
  layout: 'dashboard',
  
  async fetch({store, redirect}) {
    if (!store.state.auth.user) {
      redirect('/signin')
    }

    await store.dispatch('auth/fetch')
    await store.dispatch('jobs/fetchAllJob')
  },
  
  head () {
    return {
      title: 'Jobbase | Jobs'
    }
  },

  computed: {
    ...mapState({
      user: state => state.auth.user,
      jobs: state => state.jobs.list,
    })
  }
}
</script>
