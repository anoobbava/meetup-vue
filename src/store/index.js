import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wholeMeetups: [{
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      name: 'meetup in KPY',
      id: '1',
      date: '01-01-2018',
      description: ''
    },
    {
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      name: 'Mettup in India',
      id: '2',
      date: '02-01-2018',
      description: ''
    },
    {
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      name: 'Meetup in Australia',
      id: '3',
      date: '03-01-2018',
      description: ''
    }
    ],

    users: {
      id: '',
      linkedMeetups: []
    }
  },

  getters: {
    wholeMeetups (state) {
      // need to sort the data based on the date
      return state.wholeMeetups
    },

    selectedMeetups (state) {
      return state.wholeMeetups.slice(0, 2)
    },

    singleMeetup (state) {
      return (meetupId) => {
        return state.wholeMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  },

  mutations: {
    saveMeetup (state, payload) {
      state.wholeMeetups.push(payload)
    },

    setUserMutation (state, payload) {
      state.user = payload
    }
  },

  actions: {

    saveMeetup (context, payload) {
      context.commit('saveMeetup', payload)
    },

    signUpUser (context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            firebase.auth().onAuthStateChanged(function (user) {
              const newUser = {
                id: user.uid,
                linkedMeetups: []
              }
              console.log('user uid' + ' ' + user.uid)
              context.commit('setUserMutation', newUser)
            })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  }
})
