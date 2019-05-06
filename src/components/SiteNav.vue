<template>
  <nav class="siteNav">
    <router-link class="siteNav__link" to="/cliffs" id="cliff_link">Cliffs</router-link> | 
    <router-link class="siteNav__link" to="/doodads" id="doodad_link">Doodads</router-link> | 
    <router-link class="siteNav__link" to="/tilesets" id="tilset_link">Tilesets</router-link> |
    <router-link class="siteNav__link" to="/terrain" id="tilset_link">Terrain Gallery</router-link> |
    <router-link class="siteNav__link" to="/maps" id="tilset_link">Sample Maps</router-link>
    <div class="siteNav__tip">Tip: You can search for multiple terms by separating each term with a comma (dont use spaces unless deliberate to differentiate, say, "<em>tree</em>" from "s<em>tree</em>t"). For example: "zerg,creep" to search anything that contains either "zerg" or "creep".</div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNav'
}
</script>

<style lang="scss" scoped>
  .siteNav {
    &__link {
      @include link();
    }
    &__tip {
      font-size: 80%;
      margin-top: 1rem;
      max-width: 500px;
    }
  }
</style>

