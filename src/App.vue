<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Meetup</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>meetups</v-btn>
      <v-btn flat>new Meetup</v-btn>
      <v-btn flat>Profile</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'App'
}
</script>
