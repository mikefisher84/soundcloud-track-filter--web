<template>
  <div v-on:click="showAlbumDetail" class="card" style="width: 20rem;">
    <img class="card-img-top" :src="album.image">
    <div class="card-body">
      <h5 class="card-title">{{album.name}}</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArtistDetail',
  props: ['album'],
  methods: {
    showAlbumDetail() {
      this.$emit('showAlbumDetail', this.album);
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>


