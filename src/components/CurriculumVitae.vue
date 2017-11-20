<template>
<div class="container">
  <section class="block">
    <p>
      This is my curriculum vitae, if you wanna see my Resume, click here to download.
    </p>
  </section>
  <my-professional></my-professional>
  <my-education></my-education>
  <my-experience></my-experience>
  <my-projects></my-projects>
</div>
</template>

<script>
import Nav from './Navigation'
import Professional from './Blocks/Professional'
import Education from './Blocks/Education'
import Experience from './Blocks/Experience'
import Projects from './Blocks/Projects'

export default {
  name: 'CurriculumVitae',
  components: {
    'the-nav': Nav,
    'my-professional': Professional,
    'my-education': Education,
    'my-experience': Experience,
    'my-projects': Projects
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
