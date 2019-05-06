<template>  
  <div class="imageFilter">
    Filter: <input type="search" 
      class="imageFilter__input" 
      id="filter" 
      v-model="filter"
      v-on:keyup.enter="updateValue(filter)"
      v-on:keyup.esc="clearFilter()"
    >
    <button class="imageFilter__button" 
      id="searchbtn" 
      v-on:click="updateValue(filter)">search</button>
    <button 
      class="imageFilter__button" 
      id="clear"
      v-on:click="clearFilter()"
    >clear</button>
  </div>
</template>

<script>
export default {
  name: 'ImageFilter',
  props: ['value'],
  methods: {
    updateValue: function(value) {
      this.$emit('updateFilter', value);
    },
    clearFilter: function() {
      this.filter = '';
      this.$emit('updateFilter', this.filter);
    }
  },
  data() {
    return {
      filter: ''
    }
  }
}
</script>
