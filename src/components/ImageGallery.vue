<template>
  <main class="imageGallery" @keyup.esc="escKey">
    <header class="imageGallery__header">
      <ImageFilter v-model="filter" v-on:updateFilter="onUpdateFilter"/>
      <SiteNav/>
    </header>
    <div class="imageGallery__gallery">
      <LightBoxThumbnail 
        v-for="(image, index) in filteredList"
        v-on:imageSelected="onImageSelected"
        :index="index"
        :key="index"
        :img="image"
        :type="type"
      >
      </LightBoxThumbnail>
      <LightBoxDisplay
        :url="this.url"
        :type="this.type"
        v-on:imageSelected="onImageSelected"
        v-on:lightBoxPrevious="onPrevious"
        v-on:lightBoxNext="onNext"
        v-if="showLightbox"
      >
      </LightBoxDisplay>
    </div>
  </main>
</template>

<script>
import ImageFilter from "@/components/ImageFilter";
import SiteNav from "@/components/SiteNav";
import LightBoxThumbnail from "@/components/lightbox/LightBoxThumbnail";
import LightBoxDisplay from "@/components/lightbox/LightBoxDisplay";
// import store from '@/vuex/store';

export default {
  name: 'ImageGallery',
  components: {
    ImageFilter,
    LightBoxThumbnail,
    LightBoxDisplay,
    SiteNav
  },
  data() {
    return {
      filteredList: [],
      imageIndex: '',
      url: '',
      filter: '',
      showLightbox: false
    }
  },
  props: {
    images: Array,
    type: String
  },
  created() {
    this.filteredList = this.$props.images;
  },
  methods: {
    onUpdateFilter: function (newFilter) {
      this.filter = newFilter;
      const filter = this.filter;
      const images = this.images;
      if (filter !== '') {
        function wordAppears(image) {
          let splitFilters = filter.split(',');
          let matches = 0;
          splitFilters.forEach(function(element){
            if (image.name.toLowerCase().indexOf(element) >= 0) {
              matches += 1;
            }
          });
          return matches > 0;
        }
        const filteredImages = images.filter(wordAppears);
        this.filteredList = filteredImages;
      } else {
        this.filteredList = images;
      }
    },
    onImageSelected: function(image, index) {
      this.url = image;
      this.imageIndex = index;
      this.showLightbox = image !== '' ? true : false;
    },
    onPrevious: function() {
      this.imageIndex -= 1;
      const newImage = this.filteredList[this.imageIndex];
      this.url = newImage.url;
    },
    onNext: function() {
      this.imageIndex += 1;
      const newImage = this.filteredList[this.imageIndex];
      this.url = newImage.url;
    },
    escKey: function() {
      this.url = '';
      this.showLightbox = false;
    },
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
  .imageGallery {
    padding: 0 1rem;
    &__header {
      padding: 40px;
    }
    &__gallery {
      @include gallery();
    }
    &__link {
      @include link();
    }
    &__item {
      @include referenceImage();
    }
  }
</style>