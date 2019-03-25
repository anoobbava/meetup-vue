// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import { store } from './store'
import Alert from './components/Shared/Alert.vue'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

Vue.component('alert', Alert)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnGJmSrJdV_nMsmXSLL8jAM1xuT5OqpQ8',
      authDomain: 'vue-meetup-49adf.firebaseapp.com',
      databaseURL: 'https://vue-meetup-49adf.firebaseio.com',
      projectId: 'vue-meetup-49adf',
      storageBucket: 'gs://vue-meetup-49adf.appspot.com',
      messagingSenderId: '123421183379'
    })
    // auto signin when the page refreshed
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // debugger
        const User = {
          id: user.uid,
          linkedMeetups: user.linkedMeetups
        }
        this.$store.dispatch('autoSignInAction', User)
      }
    })
  }
})
