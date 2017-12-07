<template>
    <ul class="list-group">
      <artist-list-item v-for="artist in artists" :key="artist.id" v-bind:artist="artist" v-on:selectArtist="selectArtist"/>
    </ul>
</template>

<script>
import ArtistListItem from './ArtistListItem';

export default {
  name: 'ArtistList',
  props: ['artists'],
  components: {
    ArtistListItem,
  },
  data() {
    return {
      loading: 0,
      queryArtists: [],
    };
  },
  methods: {
    selectArtist(artist) {
      this.$emit('selectArtist', artist);
    },
  },
};
</script>
