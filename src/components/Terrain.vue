<template>
  <ImageGallery v-bind:images="images" type="terrain"/>
</template>

<script>
import ImageGallery from '@/components/ImageGallery';
import terrain from '@/assets/lists/terrain-list.js';
export default {
  components: {
    ImageGallery
  },
  data() {
    return {
      images: terrain,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
