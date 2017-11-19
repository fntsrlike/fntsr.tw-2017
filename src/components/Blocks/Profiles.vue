<template>
  <section class="block">
    <img class="avatar" src="http://www.gravatar.com/avatar/c6f3d51bca936e1d0ab0ee9e091545f9.jpg?s=100&r=g" />
    <p>It's is fntsr.tw, a page of mine.</p>
    <section>
      <p>
        I am Shu-Wei Lin <small>(林書緯)</small>, <br/> a.k.a Ruoshi <small>(若虛)</small>, Yuehu<small>(月湖)</small>.
      </p>
      <p>
        I am a programmer. Love to develop web application to help life and work be easier. I also enjoy studying history.
      </p>
    </section>
    <section class="relative-icon">
      <a id="mail-icon" target="_blank" href="mailto:me@fntsr.tw" title="mail">
        <i class="fa fa-at"></i>
      </a>
        <a id="blog-icon" target="_blank" href="http://blog.fntsr.tw/" title="blog">
        <i class="fa fa-pencil-square"></i>
      </a>
        <a id="github-icon" target="_blank" href="https://github.com/fntsrlike">
        <i class="fa fa-github-square"></i>
      </a>
        <a id="twitter-icon" target="_blank" href="https://twitter.com/fntsrlike">
        <i class="fa fa-twitter-square"></i>
      </a>
        <a id="fb-icon" target="_blank" href="https://www.facebook.com/profile.php?id=100006699756364">
        <i class="fa fa-facebook-square"></i>
      </a>
        <a id="linkedin-icon" target="_blank" href="https://www.linkedin.com/profile/view?id=350737072">
        <i class="fa fa-linkedin-square"></i>
      </a>
        <a id="slideshare-icon" target="_blank" href="http://www.slideshare.net/ruoshiling">
        <i class="fa fa-slideshare"></i>
      </a>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Profiles'
}
</script>

<style scoped>
.avatar {
  float: right;
  margin: 1px;
  padding: 1px;
  width: 90px;
  height: 90px;
  border-radius: 45px 45px;
  overflow: hidden;
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
</style>
