<template>
  <div class="container">
    <my-introduction></my-introduction>
    <my-nickname></my-nickname>
    <thanks-for></thanks-for>
  </div>
</template>

<script>
import Nav from './Navigation'
import Introduction from './Blocks/Introduction'
import Professional from './Blocks/Professional'
import Education from './Blocks/Education'
import Experience from './Blocks/Experience'
import Projects from './Blocks/Projects'
import Nickname from './Blocks/Nickname'
import Thanks from './Blocks/Thanks'

export default {
  name: 'Profiles',
  components: {
    'the-nav': Nav,
    'my-introduction': Introduction,
    'my-professional': Professional,
    'my-education': Education,
    'my-experience': Experience,
    'my-projects': Projects,
    'my-nickname': Nickname,
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