<template>
  <div class="container">
    <section-introduction></section-introduction>
    <section-announcement></section-announcement>
    <section-thanks></section-thanks>
  </div>
</template>

<script>
import SectionIntroduction from './sections/SectionIntroduction'
import SectionAnnouncement from './sections/SectionAnnouncement'
import SectionThanks from './sections/SectionThanks'

export default {
  name: 'TheProfiles',
  components: {
    'section-introduction': SectionIntroduction,
    'section-announcement': SectionAnnouncement,
    'section-thanks': SectionThanks
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>