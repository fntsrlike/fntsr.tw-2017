import Vue from 'vue'
import Router from 'vue-router'
import TheProfiles from '@/components/TheProfiles'
import TheProfilesZh from '@/components/TheProfilesZh'
import TheCollections from '@/components/TheCollections'
import TheCurriculumVitae from '@/components/TheCurriculumVitae'

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
        default: TheProfiles,
        slogan: sloganTemplate('The Right Way is following The Heart.')
      }
    },
    {
      path: '/zh',
      name: 'ProfilesZh',
      components: {
        default: TheProfilesZh,
        slogan: sloganTemplate('從心所行即是正路')
      }
    },
    {
      path: '/collections',
      name: 'Collections',
      components: {
        default: TheCollections,
        slogan: sloganTemplate('Push commits a day, keep issues away.')
      }
    },
    {
      path: '/cv',
      name: 'CurriculumVitae',
      components: {
        default: TheCurriculumVitae,
        slogan: sloganTemplate('Keep Improving')
      }
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
    }
  ]
})
