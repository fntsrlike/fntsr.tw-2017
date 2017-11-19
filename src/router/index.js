import Vue from 'vue'
import Router from 'vue-router'
import Profiles from '@/components/Profiles'
import ProfilesZh from '@/components/ProfilesZh'
import Collections from '@/components/Collections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profiles',
      component: Profiles
    },
    {
      path: '/zh',
      name: 'ProfilesZh',
      component: ProfilesZh
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '*',
      name: '404',
      component: Profiles
    }
  ]
})
