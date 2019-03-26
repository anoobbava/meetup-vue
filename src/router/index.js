import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetup from '@/components/Meetup/Meetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import authGuard from '@/router/authGuard'
import editMeetup from '@/components/Meetup/EditMeetup'

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
      component: CreateMeetup,
      beforeEnter: authGuard
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: authGuard
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
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/meetups/:id/edit',
      name: 'editMeetup',
      props: true,
      component: editMeetup
    }
  ],
  mode: 'history'
})
