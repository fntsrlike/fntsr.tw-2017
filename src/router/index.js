import Vue from 'vue'
import Router from 'vue-router'
import Profiles from '@/components/Profiles'
import ProfilesZh from '@/components/ProfilesZh'
import Collections from '@/components/Collections'
import CurriculumVitae from '@/components/CurriculumVitae'

Vue.use(Router)

const sloganTemplate = function (slogan) {
  return { template: '<span>' + slogan + '</span>' }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profiles',
      components: {
        default: Profiles,
        slogan: sloganTemplate('The Right Way is following The Heart.')
      }
    },
    {
      path: '/zh',
      name: 'ProfilesZh',
      components: {
        default: ProfilesZh,
        slogan: sloganTemplate('從心所行即是正路')
      }
    },
    {
      path: '/collections',
      name: 'Collections',
      components: {
        default: Collections,
        slogan: sloganTemplate('Push commits a day, keep issues away.')
      }
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
    }
  ]
})
