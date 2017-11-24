<template>
<div class="container">
  <section class="block">
    <p>
      This is my curriculum vitae, if you wanna see my Resume, click here to download.
    </p>
  </section>
  <section-professional></section-professional>
  <section-education></section-education>
  <section-experience></section-experience>
  <section-projects></section-projects>
</div>
</template>

<script>
import SectionProfessional from './sections/SectionProfessional'
import SectionEducation from './sections/SectionEducation'
import SectionExperience from './sections/SectionExperience'
import SectionProjects from './sections/SectionProjects'

export default {
  name: 'TheCurriculumVitae',
  components: {
    'section-professional': SectionProfessional,
    'section-education': SectionEducation,
    'section-experience': SectionExperience,
    'section-projects': SectionProjects
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
