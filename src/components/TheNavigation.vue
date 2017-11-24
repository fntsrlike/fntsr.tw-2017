<template>
  <nav class="nav">
    | <router-link to="/" exact>Profiles</router-link>
    | <router-link to="/cv">CV</router-link>
    | <router-link to="/collections">Collections</router-link>
    |
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation'
}
</script>

<style scoped>
.nav {
  margin: 0 auto;
  padding: 0 20px 10px;
  text-align: center;
}

.router-link-active {
  color: black;
  cursor: default;
}
</style>
