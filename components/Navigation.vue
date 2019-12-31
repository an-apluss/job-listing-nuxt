<template>
  <div>
    <v-toolbar dark class="white">
      <v-toolbar-title class="headline text-uppercase ml-10">
        <nuxt-link to="/" class="font-weight-bold black--text">JOBBASE</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="teal--text text-capitalize mr-3" nuxt href="/signin" exact color="white">signin</v-btn>
      <v-btn class="teal--text mr-10 text-capitalize" nuxt href="/register" exact color="white">Register</v-btn>
    </v-toolbar>
  </div>
</template>

