<template>
  <ImageGallery v-bind:images="images" type="cliffs"/>
</template>

<script>
import ImageGallery from '@/components/ImageGallery';
import cliffs from '@/assets/lists/cliff-list.js';

export default {
  name: 'Cliffs',
  components: {
    ImageGallery
  },
  data() {
    return {
      images: cliffs,
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
