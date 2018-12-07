<template>
  <!-- wrapping in container give the spacing and all -->
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
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
            <v-btn flat color="primary">
              <v-icon>assignment_turned_in</v-icon>Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup() {
        return this.$store.getters.singleMeetup(this.id)
      }
    }
  }
</script>