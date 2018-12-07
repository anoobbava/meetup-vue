import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wholeMeetups: [{
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      name: 'meetup in KPY',
      id: '1',
      date: '01-01-2018'
    },
    {
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      name: 'Mettup in India',
      id: '2',
      date: '02-01-2018'
    },
    {
      imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      name: 'Meetup in Australia',
      id: '3',
      date: '03-01-2018'
    }
    ],
    users: [

    ]
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
    saveMeetup  (state, payload) {
      state.wholeMeetups.push(payload)
    }

  },
  actions: {
    saveMeetup (context, payload) {
      context.commit('saveMeetup', payload)
    }
  }
})
