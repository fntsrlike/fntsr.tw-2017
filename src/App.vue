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


footer {
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

article {
  background: rgba(255,255,255,0.5);
  margin-bottom: 20px;
  padding: 10px 20px;
  box-shadow: silver 0 0 10px;
}

h2 {
  font-size: 14px;
}

.slogan {
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5em;
}

.divider {
  background: rgba(255,255,255,0.5);
  margin: 20px auto;
  padding: 10px 20px;
  box-shadow: silver 0 0 10px;
  text-align: center;
  font-weight: bold;
}

.container {
  max-width: 500px;
  margin: auto;
}

.avatar {
  float: right;
  margin: 1px;
  padding: 1px;
  width: 90px;
  height: 90px;
  border-radius: 45px 45px;
  overflow: hidden;
}

.screenshot {
  width: 150px;
  height: 112.5px;
  margin: 0 2px;
}

.gallery {
  width: 627px;
  margin: 0 auto;
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

#mail-icon :hover {
  color: rgb(66, 133, 244);
}

#blog-icon :hover {
  color: rgb(6, 122, 182);
}

#github-icon :hover {
  color: rgb(51, 51, 51);
}

#twitter-icon :hover {
  color: rgb(85, 172, 238);
}

#fb-icon :hover {
  color: rgb(64, 94, 155);
}

#linkedin-icon :hover {
  color: rgb(29, 135, 190);
}

#slideshare-icon :hover {
  color: rgb(6, 122, 182);
}

@media screen and (max-width: 400px) {
  ul {
    padding-left: 20px;
  }
}
</style>
