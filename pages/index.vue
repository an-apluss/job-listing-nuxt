<template>
   <div>
      <v-toolbar app dark class="white">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify &nbsp;</span>
        <span class="font-weight-bold" color="black">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-carousel
      cycle
      height="365"
      hide-delimiter-background
      show-arrows-on-hover
      class="mt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-content>
    </v-content>
   </div>
</template>

<script>
export default {
    data () {
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
        ]
      }
    },
  }
</script>
