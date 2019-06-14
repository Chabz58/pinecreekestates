import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './views/Welcome.vue'
import Homes from './views/Homes.vue'
import Register from './views/Register.vue'
import Team from './views/Team.vue'
import Features from './views/Features.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/homes',
      name: 'homes',
     component: Homes
    },
    {
      path: '/features',
      name: 'features',
     component: Features
    },
    {
      path: '/team',
      name: 'team',
     component: Team
    },
    {
      path: '/register',
      name: 'register',
     component: Register
    },
  ]
})
