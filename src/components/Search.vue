<template>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search"  v-model="artistName" v-on:keyup.enter="doSearch()">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="doSearch()">Search</button>
      </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      loading: 0,
      artistName: '',
      queryArtists: [],
    };
  },
  methods: {
    doSearch() {
      if (this.artistName.length > 0) {
        const artistName = this.artistName;
        this.$emit('queryArtistName', artistName);
        this.artistName = '';
      }
    },
  },
};
</script>
