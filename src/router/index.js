import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/new_meetup',
      name: 'CreateMeetup',
      component: CreateMeetup
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/sign_in',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/sign_up',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
