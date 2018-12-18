<template>
    <v-container>
        <v-layout >
            <v-flex xs12 sm8 offset-md2>
              <h1>create new Meetup</h1>
              <form>
                <v-text-field
                  v-model='name'
                  placeholder='Title'>
                </v-text-field>
                <v-text-field
                  v-model='location'
                  placeholder='enter the Location'>
                </v-text-field>
                <v-text-field
                  v-model='imageUrl'
                  placeholder='enter the Image URL'>
                </v-text-field>
                <img :src="imageUrl" height="300" width="750" alt/>  
                <v-text-field
                  v-model='description'
                  placeholder='enter the Description'>
                </v-text-field>
                <v-btn @click='submitData'
                  color='success'
                  :disabled='!checkDataPresent'>
                  Create Meeetup
                </v-btn>
                <v-btn @click='clearData'
                color='secondary'>clear</v-btn>
            </form>
         </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
      data () {
        return {
          name: '',
          location: '',
          imageUrl: '',
          description: ''
        }
      },
      methods: {
        submitData () {
          const meetupData = {
            name: this.name,
            location: this.location,
            imageUrl: this.imageUrl,
            description: this.description,
            id: 'XXwww2',
            date: '01-02-2017'
          }
          this.$store.dispatch('saveMeetup', meetupData)
          this.$router.push('/meetups')
        },
        clearData () {
          this.name = ''
          this.location = ''
          this.imageUrl = ''
          this.description = ''
        }
      },
      computed: {
        checkDataPresent () {
          return this.name !== '' &&
            this.location !== '' &&
            this.imageUrl !== '' &&
            this.description !== ''
        }
      }
    }
</script>
