<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card v-for="meetup in meetups" :key="meetup.id" class="mb-4">
          <v-img :src="meetup.imageUrl" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{meetup.name}}</h2>
              <h3>{{meetup.date}}</h3>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" @click="gotoMeetup(meetup.id)">
              <v-icon>arrow_right_alt</v-icon> View Meetup</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.wholeMeetups
      }
    },
  methods: {
    gotoMeetup (meetupId) {
      this.$router.push('/meetups/' + meetupId)
    }
  }
  }
</script>
