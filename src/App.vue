<template>
  <div id="app">
    <ul>
      <li v-for="item in queryArtists" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </li>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'app',
  apollo: {
    queryArtists: gql`{
      queryArtists(byName: "Queen") {
        name
        albums {
          id
          name
        }
      }
    }`,
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
