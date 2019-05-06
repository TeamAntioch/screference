<template>
  <div class="lightBoxDisplay" 
    @click="clearLightbox"
    @keyup.esc="clearLightbox"
    @keyup.left="lightBoxPrevious"
    @keyup.right="lightBoxNext"
  >
    <figure class="lightBoxDisplay__figure" id="lightboxPopup" tabindex="0">
      <img :src="imgUrl" class="lightBoxDisplay__image" @click.stop>
      <div class="lightBoxDisplay__clear" @click="clearLightbox"></div>
      <a class="lightBoxDisplay__nav lightBoxDisplay__nav--previous" @click.stop="lightBoxPrevious">
        <div class="lightBoxDisplay__arrow lightBoxDisplay__arrow--previous"></div>
      </a>
      <a class="lightBoxDisplay__nav lightBoxDisplay__nav--next" @click.stop="lightBoxNext">
        <div class="lightBoxDisplay__arrow lightBoxDisplay__arrow--next"></div>
      </a>
      <a v-if="this.type === 'maps'" class="lightBoxDisplay__download" :href="downloadUrl" @click.stop>Download Map</a>
    </figure>
  </div>
</template>

<script>
export default {
  name: "LightBoxDisplay",
  props: {
    url: String,
    type: String,
  },
  computed: {
    imgUrl: function() {
      return `/static/images/${this.type}/${this.url}`;
    },
    downloadUrl: function() {
      const url = this.url;
      const split = url.split(".");
      const filename = split[0];
      return `/static/images/${this.type}/${filename}.SC2Map`;
    }
  },
  mounted() {
    const popup = document.getElementById('lightboxPopup');
    popup.focus();
  },
  methods: {
    clearLightbox: function() {
      console.log('clearing lightbox');
      this.$emit('imageSelected','');
    },
    lightBoxPrevious: function() {
      console.log('clicked previous');
      this.$emit('lightBoxPrevious');
    },
    lightBoxNext: function() {
      console.log('clicked next');
      this.$emit('lightBoxNext');
    }
  }
}
</script>

<style lang="scss" scoped>
  .lightBoxDisplay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    &__figure {
      background-color: white;
      border-radius: 5px;
      padding: .75rem;
      position: relative;
      width: 85vmin;
      &:focus {
        outline: none;
      }
    }
    &__image {
      height: auto;
      width: 100%;
    }
    &__clear {
      background-image: url(/static/lightbox/fancybox_sprite@2x.png);
      background-size: 44px 152px;
      cursor: pointer;
      height: 36px;
      position: absolute;
      right: -18px;
      top: -18px;
      width: 36px;
      z-index: 8040;
    }
    &__nav {
      position: absolute;
      top: 0;
      width: 40%;
      height: 100%;
      cursor: pointer;
      text-decoration: none;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      z-index: 8040;
      &--previous {
        left: 0;
      }
      &--next {
        right: 0;
      }
      &:hover {
        .lightBoxDisplay__arrow {
          visibility: visible;
        }
      }
    }
    &__download {
      border-radius: 5px 0 0 0;
      position: absolute;
      right: .75rem;
      bottom: .75rem;
      color: black;
      background: white;
      padding: .25rem;
      z-index: 8050;
    }
    &__arrow {
      position: absolute;
      top: 50%;
      width: 36px;
      height: 34px;
      margin-top: -18px;
      cursor: pointer;
      z-index: 8040;
      visibility: hidden;
      background-image: url(/static/lightbox/fancybox_sprite@2x.png);
      background-size: 44px 152px;
      &--previous {
        left: 20px;
        background-position: 0 -36px;
      }
      &--next {
        right: 20px;
        background-position: 0 -72px;
      }
    }
  }
</style>
