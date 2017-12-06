<template>
  <div id="app" class="container">
    <div class="row">
      <heading class="col-lg" v-on:queryArtistName="queryArtistName"/>
    </div>
    <!-- <search v-on:queryArtistName="queryArtistName"/> -->
    <div class="row">
      <artist-list v-bind:artists="queryArtists"/>
    </div>
  </div>
</template>

<script>
import QUERY_ARTIST from './graphql/query-artist-name.gql';
import ArtistList from './components/ArtistList';
import Heading from './components/Heading';
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    ArtistList,
    Search,
    Heading,
  },
  data() {
    return {
      queryArtistTest: '',
    };
  },
  apollo: {
    queryArtists: {
      query: QUERY_ARTIST,
      variables() {
        return {
          artistName: this.queryArtistTest,
        };
      },
      skip() {
        return !this.queryArtistTest;
      },
    },
  },
  methods: {
    queryArtistName(artistName) {
      this.queryArtistTest = artistName;
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
  margin-top: 60px;
}
</style>
