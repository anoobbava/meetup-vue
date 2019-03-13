import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wholeMeetups: [],
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
    },
    wholeMutation (state, payload) {
      state.wholeMeetups = payload
    }
  },

  actions: {

    saveMeetup ({ commit }, payload) {
      // start the firebase save data
      const meetup = {
        imageUrl: payload.imageUrl,
        name: payload.name,
        date: payload.date,
        description: payload.description
      }
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          const key = data.key
          meetup.id = key
          commit('saveMeetup', meetup)
        })
        .catch((error) => {
          console.log(error)
        })
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

    loadingAction ({ commit }, payload) {
      commit('setLoadingMutation', payload)
    },

    errorAction ({ commit }, payload) {
      commit('setErrorMutation', payload)
    },

    setUserAction ({ commit }, payload) {
      commit('setUserMutation', payload)
    },

    wholeMeetupsAction ({ commit }) {
      // call firebase and fetch all the data under mutation
      firebase.database().ref('meetups').once('value')
      .then((response) => {
        const meetups = []
        const object = response.val()
        for (let key in object) {
          meetups.push({
            imageUrl: object[key].imageUrl,
            name: object[key].name,
            date: object[key].date,
            description: object[key].description,
            id: object[key].id
          })
        }
        commit('wholeMutation', meetups)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
})
