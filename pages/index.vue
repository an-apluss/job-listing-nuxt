<template>
   <div>
    <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
      class="mt-4 mb-9"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-container >
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
            :href="`jobs/${job.id}/view`"
            hover
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
   </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData () {
    return {
      items: [
        {
          src: 'https://res.cloudinary.com/an-apluss/image/upload/v1576356836/job-listing/home1.jpg',
        },
        {
          src: 'https://res.cloudinary.com/an-apluss/image/upload/v1576356836/job-listing/home2.jpg',
        },
        {
          src: 'https://res.cloudinary.com/an-apluss/image/upload/v1576356836/job-listing/home3.jpg',
        }
      ],
    }
  },

  head () {
    return {
      title: 'Jobbase | Home'
    }
  },

  async fetch({store}) {
    await store.dispatch('jobs/fetchAllJob')
  },

  computed: {
    ...mapState({
      jobs: state => state.jobs.list
    })
  }
}
</script>
