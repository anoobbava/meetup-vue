<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color='primary'>
          <v-carousel>
            <v-carousel-item
              v-for="(item, index) in imageItems"
              :key="index"
              :src="item.imageUrl"
              @click="displayMeetup(item.id)"
              style="cursor: pointer">
              <div class='title'>{{item.name}}</div>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    imageItems() {
      return this.$store.getters.selectedMeetups
    }
  },
  methods: {
    displayMeetup(id) {
      this.$router.push('/meetups/' + id)
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  padding: 30px;
  bottom: 50px;
  font-size: 2em;
}
</style>