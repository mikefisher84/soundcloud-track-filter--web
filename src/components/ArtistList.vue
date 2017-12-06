<template>
  <div class="col-lg">
    <!-- <h1 v-if="loading">loading</h1> -->
    <ul class="list-group">
      <artist-list-item v-for="artist in artists" :key="artist.id" v-bind:artist="artist"/>
    </ul>
  </div>
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
};
</script>
