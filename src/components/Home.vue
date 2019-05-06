<template>
  <main class="frontPage">
    <h1 class="frontPage__heading">StarCraft 2 Mapping Reference</h1>
    <section class="frontPage__links">
      <figure v-for="page in pages" class="frontPage__item" v-bind:key="page.name">
        <router-link v-bind:to="page.link" class="frontPage__link">
        <img v-bind:src="page.image">
        <figcaption class="frontPage__caption">
          {{page.name}}
        </figcaption>
        </router-link>
      </figure>
    </section>
  </main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      pages: [
        { name: 'Cliffs', image: '/static/images/cliffs/thumbs/Agria_Manmade.jpg', link: 'cliffs' },
        { name: 'Doodads', image: '/static/images/doodads/thumbs/Castanar_Holo_Projector.jpg', link: 'doodads' },
        { name: 'Tilesets', image: '/static/images/tilesets/thumbs/(HotS)_Char_Fortress_Ash.jpg', link: 'tilesets' },
        { name: 'Terrain Gallery', image: '/static/images/terrain/thumbs/001.jpg', link: 'terrain' },
        { name: 'Sample Maps', image: '/static/images/maps/thumbs/DoodadsIdeas_Newbie4life.jpg', link: 'maps' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .frontPage {
    &__heading {
      margin: 1rem 0 2rem;
      text-align: center;
    }
    &__links {
      @include gallery();
    }
    &__item {
      color: white;
      @include referenceImage();
      & + & {
        margin-left: 50px;
      }
    }
    &__link {
      @include link();
    }
  }
</style>
