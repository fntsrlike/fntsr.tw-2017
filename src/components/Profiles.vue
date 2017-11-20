<template>
  <div class="container">
    <my-introduction></my-introduction>
    <my-announcement></my-announcement>
    <thanks-for></thanks-for>
  </div>
</template>

<script>
import Nav from './Navigation'
import Introduction from './Blocks/Introduction'
import Announcement from './Blocks/Announcement'
import Professional from './Blocks/Professional'
import Education from './Blocks/Education'
import Experience from './Blocks/Experience'
import Projects from './Blocks/Projects'
import Thanks from './Blocks/Thanks'

export default {
  name: 'Profiles',
  components: {
    'the-nav': Nav,
    'my-introduction': Introduction,
    'my-announcement': Announcement,
    'my-professional': Professional,
    'my-education': Education,
    'my-experience': Experience,
    'my-projects': Projects,
    'thanks-for': Thanks
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>