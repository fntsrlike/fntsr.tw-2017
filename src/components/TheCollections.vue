<template>
  <div class="container" style="max-width:700px;">
    <section class="block">
      <h2>目錄</h2>
      <ol class="menu">
        <li v-for="(collection, index) in collections" :key="collection.id">
          {{collection.name}}
        </li>
      </ol>
    </section>
    <div class="collections">
      <section class="block" v-for="collection in collections" :key="collection.id">
        <h2 class="collection-name">{{collection.name}}</h2>
        <ul>
          <li v-if="collection.links.source">
            Souce: <a target="_blank" :href="collection.links.source">{{collection.links.source}}</a>
          </li><li v-if="collection.links.demo">
            Instance: <a target="_blank" :href="collection.links.demo">{{collection.links.demo}}</a>
          </li><li v-if="collection.languages">
            Language: {{collection.languages.join(', ')}}
          </li><li v-if="collection.frameworks">
            Framework: {{collection.frameworks.join(', ')}}
          </li>
        </ul>
        <p v-for="paragraph in collection.description" :key="paragraph">
          {{paragraph}}
        </p>
        <div class="gallery">
          <a :href="requireImage(screenshot)" v-for="screenshot in collection.screenshots" :key="screenshot">
            <img class="screenshot" :src="requireImage(screenshot)"/>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CollectionsData from '../data/dist/collections.json'
const ImagePathToUrl = require.context('../assets/images', true)

export default {
  name: 'TheCollections',
  data () {
    return {
      collections: CollectionsData
    }
  },
  methods: {
    requireImage: function (imageName) {
      return ImagePathToUrl(imageName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gallery {
  width: 627px;
  margin: 0 auto;
}

.screenshot {
  width: 150px;
  height: 112.5px;
  margin: 0 2px;
}

.divider {
  background: rgba(255,255,255,0.5);
  margin: 20px auto;
  padding: 10px 20px;
  box-shadow: silver 0 0 10px;
  text-align: center;
  font-weight: bold;
}

ol.menu {
  counter-reset: item;
  list-style-type: none;
}

ol.menu li:before {
  content: '#' counter(item, decimal-leading-zero) '. ';
  counter-increment: item;
}

.collections {
  counter-reset: collection;
  list-style-type: none;
}

.collections .collection-name:before {
  content: '#' counter(collection, decimal-leading-zero) '. ';
  counter-increment: collection;
}
</style>