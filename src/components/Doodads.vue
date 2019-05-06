<template>
  <ImageGallery v-bind:images="images" type="doodads"/>
</template>

<script>
import ImageGallery from '@/components/ImageGallery';
import doodads from '@/assets/lists/doodad-list.js';
export default {
  components: {
    ImageGallery
  },
  data() {
    return {
      images: doodads,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
