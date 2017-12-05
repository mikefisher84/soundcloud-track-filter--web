<template>
  <div>
    <input type="text">
  </div>
</template>

<script>
import gql from 'graphql-tag';

const query = gql`
  query ArtistList {
    queryArtists(byName: "Queen") {
      name
      albums {
        id
        name
      }
    }
  }`;

export default {
  name: 'ArtistList',
  data() {
    return {
      loading: 0,
      queryArtists: [],
    };
  },
  apollo: {
    queryArtists: query,
  },
};
</script>
