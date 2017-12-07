<template>
  <div id="app">
    <heading class="col-lg" v-on:queryArtistName="queryArtistName"/>
    <div class="container-fluid">
      <div class="row">
        <artist-list class="col-lg-3" v-bind:artists="queryArtists" v-on:selectArtist="selectArtist"/>
        <artist-detail class="col-lg-9" v-bind:artist="artist" />
      </div>
    </div>

  </div>
</template>

<script>
import QUERY_ARTIST from './graphql/query-artist-name.gql';
import ArtistList from './components/ArtistList';
import ArtistDetail from './components/ArtistDetail';
import Heading from './components/Heading';
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    ArtistList,
    Search,
    Heading,
    ArtistDetail,
  },
  data() {
    return {
      queryArtist: '',
      artist: '',
    };
  },
  apollo: {
    queryArtists: {
      query: QUERY_ARTIST,
      variables() {
        return {
          artistName: this.queryArtist,
        };
      },
      skip() {
        return !this.queryArtist;
      },
    },
  },
  methods: {
    queryArtistName(artistName) {
      this.queryArtist = artistName;
    },
    selectArtist(artist) {
      this.artist = artist;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
