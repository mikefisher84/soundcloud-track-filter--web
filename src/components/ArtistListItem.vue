<template>
  <div>
    <a href="#" class="list-group-item list-group-item-action" v-on:click="show(artist)">{{artist.name}} </a>
  </div>

</template>

<script>
import Album from './Album';

export default {
  name: 'artistListItem',
  props: ['artist'],
  components: {
    Album,
  },
  data() {
    return {
      showAlbums: 0,
    };
  },
  methods: {
    show(artist) {
      this.$root.$emit('selectedArtist');
      this.$emit('selectArtist', artist);
    },
  },
};
</script>
