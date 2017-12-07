<template>
  <div>
    <div class="card-group">
      <album v-for="album in artist.albums" :key="album.id" v-bind:album="album" v-on:showAlbumDetail="showAlbumDetail"/>
    </div>
    <album-detail v-show="showDetail" v-bind:album="albumDetail"/>
  </div>

</template>

<script>
import Album from './Album';
import AlbumDetail from './AlbumDetail';

export default {
  name: 'ArtistDetail',
  props: ['artist'],
  components: {
    Album,
    AlbumDetail,
  },
  data() {
    return {
      showAlbums: 0,
      albumDetail: '',
      showDetail: false,
    };
  },
  methods: {
    show() {
      this.showAlbums = !this.showAlbums;
    },
    showAlbumDetail(albumDetail) {
      this.showDetail = true;
      this.albumDetail = albumDetail;
      this.$root.$on('selectedArtist', () => {
        this.showDetail = false;
      });
    },
  },
};
</script>
