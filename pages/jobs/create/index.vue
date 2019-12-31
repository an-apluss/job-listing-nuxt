<template>
  <div>
      <v-row align="center">
        <v-col
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
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard', 

  fetch({store, redirect}) {
    if (!store.state.auth.user) {
      redirect('/signin')
    }
  },
  
  head () {
    return {
      title: 'Jobbase | Create Job'
    }
  },
}
</script>
