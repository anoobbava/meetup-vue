<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-carousel>
            <v-carousel-item v-for="(item, index) in imageItems" 
                :key="index"
                :src="item.imageUrl">
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default{
        data () {
            return {
                imageItems: [
                    {imageUrl: 'https://libreshot.com/wp-content/uploads/2013/11/mongolian-sacred-place-ovoo.jpg' , name: 'meetup1' }, 
                    {imageUrl: 'https://www.goodfreephotos.com/albums/united-states/wisconsin/hoffman-hills-state-recreation-area/wisconsin-hoffman-hills-state-recreation-area-picnic-place.jpg', name: 'meetup2' }, 
                    {imageUrl: 'https://www.mediastorehouse.com/image.php?large=13923395', name: 'meetup 3'} 
                ]
            }
        }
    }    
</script>