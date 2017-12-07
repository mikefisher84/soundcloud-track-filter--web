<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">Spotify GraphQL</a>
    <search v-on:queryArtistName="queryArtistName"/>
  </nav>

</template>

<script>
import Search from './Search';

export default {
  name: 'Heading',
  components: {
    Search,
  },
  methods: {
    queryArtistName(artistName) {
      this.$emit('queryArtistName', artistName);
    },
  },
};
</script>
