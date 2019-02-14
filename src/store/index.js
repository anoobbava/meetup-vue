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

    user: null,
    loading: false,
    errors: null
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
    },

    user (state) {
      return state.user
    },

    error (state) {
      return state.errors
    },

    loading (state) {
      return state.loading
    }
  },

  mutations: {
    saveMeetup (state, payload) {
      state.wholeMeetups.push(payload)
    },

    setUserMutation (state, payload) {
      state.user = payload
    },

    setLoadingMutation (state, payload) {
      state.loading = payload
    },

    setErrorMutation (state, payload) {
      state.errors = payload
    }
  },

  actions: {

    saveMeetup ({ commit }, payload) {
      commit('saveMeetup', payload)
    },

    signUpUser ({ commit, dispatch }, payload) {
      dispatch('loadingAction', true)
      dispatch('errorAction')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            firebase.auth().onAuthStateChanged(function (user) {
              const newUser = {
                id: user.uid,
                linkedMeetups: []
              }
              console.log('user uid' + ' ' + user.uid)
              dispatch('setUserAction', newUser)
              dispatch('loadingAction', false)
            })
          }
        )
        .catch(
          error => {
            console.log(error)
            dispatch('loadingAction', false)
            dispatch('errorAction', error)
          }
        )
    },

    signInAction ({ commit, dispatch }, payload) {
      dispatch('loadingAction', true)
      dispatch('errorAction')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            firebase.auth().onAuthStateChanged(function (user) {
              const newUser = {
                id: user.uid,
                linkedMeetups: []
              }
              console.log('user uid' + ' ' + user.uid)
              dispatch('setUserAction', newUser)
              dispatch('loadingAction', false)
            })
          }
        )
        .catch(
          error => {
            console.log('error' + '' + error)
            dispatch('loadingAction', false)
            dispatch('errorAction', error)
          })
    },

    loadingAction (context, payload) {
      context.commit('setLoadingMutation', payload)
    },

    errorAction (context, payload) {
      context.commit('setErrorMutation', payload)
    },

    setUserAction (context, payload) {
      context.commit('setUserMutation', payload)
    }
  }
})
