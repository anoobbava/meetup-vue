<template>
  <v-app>
    <!-- display the side bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
  
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items"
          :key="item.title" 
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- display the navigation bar -->
    <v-toolbar class='success'>
      <v-toolbar-side-icon 
      @click.stop="drawer = !drawer" 
      class='hidden-sm-and-up'>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link 
        to='/' 
        tag='span'
        style='cursor: pointer'>
        Meetup
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-xs-only'>
        <v-btn flat v-for="item in items" :key="item.title" :to="item.link">
          <v-icon right>{{item.icon}}</v-icon>{{item.title}}
        </v-btn>
      </v-toolbar-items>
      <!-- logout button -->
      <v-toolbar-items class='hidden-xs-only' v-if="userSignedIn">
        <v-btn flat @click="logout">
          <v-icon right>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- display the router view -->
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null
      }
    },
    name: 'App',
    computed: {
      items () {
        let menuItems = [
          {
            title: 'Sign-Up',
            icon: 'face',
            link: 'sign_up'
          },
          {
            title: 'Sign in',
            icon: 'no_encryption',
            link: 'sign_in'
          }
        ]
        if (this.userSignedIn) {
          menuItems = [
            {
              title: 'View Meetups',
              icon: 'group',
              link: '/meetups'
            },
            {
              title: 'New Meetup',
              icon: 'how_to_reg',
              link: '/new_meetup'
            },
            {
              title: 'Profile',
              icon: 'account_circle',
              link: '/profile'
            }
          ]
        }
        return menuItems
      },

      userSignedIn () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    // this will be called after the component created, will poulate from firebase
    created () {
      this.$store.dispatch('wholeMeetupsAction')
    },
    methods: {
      logout () {
        this.$store.dispatch('signOutAction')
        this.$router.push('/sign_in')
      }
    }
  }
</script>
