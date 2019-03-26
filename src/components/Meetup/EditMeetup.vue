<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-img :src="meetup.imageUrl" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <!-- <div> -->
              <!-- <h2 class="headline mb-0">{{meetup.name}}</h2> -->
              <v-flex xs4>
                <v-text-field
                  v-model='editedTitle'
                  placeholder='Title'>
                </v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs6>
                <v-text-field
                  v-model='editedDescription'
                  placeholder='Description'>
                </v-text-field>
              </v-flex>
             
              
            <!-- </div> -->
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green">save
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="green"
            @click="redirectToCancel">cancel
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
    meetup () {
      return this.$store.getters.singleMeetup(this.id)
    },
    editedTitle () {
      return this.meetup.name
    },
    editedDescription () {
      return this.meetup.description
    }
  },
  methods: {
    updateTofirebase () {
      // write code to fetch the data and update the data to the firebase
      // update to the store also.

    },

    redirectToCancel () {
      this.$router.push('/meetups')
    }
  }
}
</script>

<style>

</style>
