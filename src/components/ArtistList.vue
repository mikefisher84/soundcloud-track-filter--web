<template>
  <div>
    <h1 v-if="loading">loading</h1>
    <input type="text">
    <ul>
      <li v-for="item in queryArtists" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </li>
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
