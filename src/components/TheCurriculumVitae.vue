<template>
<div class="container">
  <section class="block">
    <p>
      This is my curriculum vitae, if you wanna see my Resume, click here to download.
    </p>
  </section>
  <section-professional></section-professional>
  <section-education></section-education>
  <section-speech-experiences></section-speech-experiences>
  <section-work-experiences></section-work-experiences>
  <section-organizations></section-organizations>
  <section-projects></section-projects>
  <section-awards></section-awards>
  <section-languages></section-languages>
</div>
</template>

<script>
import SectionProfessional from './sections/SectionProfessional'
import SectionEducation from './sections/SectionEducation'
import SectionSpeachExperiences from './sections/SectionSpeachExperiences'
import SectionWorkExperiences from './sections/SectionWorkExperiences'
import SectionOrganizations from './sections/SectionOrganizations'
import SectionProjects from './sections/SectionProjects'
import SectionAwards from './sections/SectionAwards'
import SectionLanguages from './sections/SectionLanguages'

export default {
  name: 'TheCurriculumVitae',
  components: {
    'section-professional': SectionProfessional,
    'section-education': SectionEducation,
    'section-speech-experiences': SectionSpeachExperiences,
    'section-work-experiences': SectionWorkExperiences,
    'section-organizations': SectionOrganizations,
    'section-projects': SectionProjects,
    'section-awards': SectionAwards,
    'section-languages': SectionLanguages
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
