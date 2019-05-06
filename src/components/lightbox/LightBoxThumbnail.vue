<template>
  <figure class="lightBoxThumbnail">
    <a class="lightBoxThumbnail__link" href="" rel="gallery" :title="img.name" v-on:click.prevent="setUrl(img.url, index)">
      <img class="lightBoxThumbnail__image" v-lazy="`/static/images/${type}/thumbs/${thumbnailUrl(img.url)}.jpg`">
      <figcaption class="lightBoxThumbnail__caption">
        {{img.name}}
      </figcaption>
    </a>
  </figure>
</template>

<script>
// import store from '@/vuex/store';
export default {
  name: "LightBoxThumbnail",
  props: {
    img: Object,
    index: Number,
    type: String
  },
  methods: {
    setUrl: function (url, index) {
      console.log(`setting url to ${url}`);
      this.$emit('imageSelected', url, index);
    },
    thumbnailUrl: function(url) {
      const split = url.split(".");
      const filename = split[0];
      return filename;
    }
  }
}
</script>

<style lang="scss" scoped>
  .lightBoxThumbnail {
    @include referenceImage();
    &__link {
      @include link();
    }
  }
</style>
