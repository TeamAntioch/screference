<template>
  <ImageGallery v-bind:images="images" type="maps"/>
</template>

<script>
import ImageGallery from '@/components/ImageGallery';
import maps from '@/assets/lists/map-list.js';
export default {
  components: {
    ImageGallery
  },
  data() {
    return {
      images: maps,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
