<template>
  <section class="block">
    <h2>Experience</h2>
    <ul>
      <li v-for="(experience, index) in experiences" :key="experience.id">
          <span v-html="experience.name.join(' ')"></span>
          <a v-if="experience.links.slides"
             class="slide-icon" target="_blank" v:href="collection.links.slides">
            <i class="fa fa-slideshare"></i>
          </a>
          <a v-if="experience.links.video"
             class="video-icon" target="_blank" v:href="collection.links.video">
            <i class="fa fa-youtube-play"></i>
          </a>
          <a v-if="experience.links.ticket"
             class="ticket-icon" target="_blank" v:href="collection.links.ticket">
            <i class="fa fa-ticket"></i>
          </a>
      </li>
    </ul>
  </section>
</template>

<script>
import ExperiencesData from '../../data/dist/experiences.json'

export default {
  name: 'SectionExperience',
  data () {
    return {
      experiences: ExperiencesData
    }
  }
}
</script>

<style scoped>

</style>
