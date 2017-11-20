<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  padding-top: 20px;
  background: url('./assets/bg.png');
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5em;
}

.slogan {
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5em;
}

.block {
  background: rgba(255,255,255,0.5);
  margin-bottom: 20px;
  padding: 10px 20px;
  box-shadow: silver 0 0 10px;
}

.container {
  max-width: 500px;
  margin: auto;
}

.footer {
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
  font-size: .8em;
}

p {
  margin-bottom: 1.5em;
}

a {
  color: darkred;
  text-decoration: none;
}

h2 {
  font-size: 14px;
}

.relative-icon {
  font-size: 1.5em;
}

.relative-icon i {
  margin: auto .2em auto auto;
}

.relative-icon a {
  color: rgb(135, 135, 135);
}

.slide-icon {
  color: rgb(6, 122, 182);
}

.video-icon {
  color: rgb(194, 25, 30);
}

.ticket-icon {
  color: rgb(100, 192, 37);
}

.github-icon {
  color: rgb(0, 0, 0);
}

@media screen and (max-width: 400px) {
  ul {
    padding-left: 20px;
  }
}
</style>
