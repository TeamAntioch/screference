<template>
  <ImageGallery v-bind:images="images" type="tilesets"/>
</template>

<script>
import ImageGallery from '@/components/ImageGallery';
import tilesets from '@/assets/lists/tileset-list.js';
export default {
  components: {
    ImageGallery
  },
  data() {
    return {
      images: tilesets,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
