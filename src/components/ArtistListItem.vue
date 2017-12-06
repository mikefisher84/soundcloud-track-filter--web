<template>
  <div>
    <a href="#" class="list-group-item list-group-item-action" v-on:click="show()">{{artist.name}} </a>
    <div class="card-group" v-if="showAlbums">
      <album class="col-sm" v-for="album in artist.albums" :key="album.id" v-bind:album="album"/>
    </div>
  </div>

</template>

<script>
import Album from './Album'

export default {
  name: 'artistListItem',
  props: ['artist'],
  components: {
    Album
  },
  data() {
    return {
      showAlbums: 0,
    };
  },
  methods: {
    show() {
      this.showAlbums = !this.showAlbums;
    },
  },
};
</script>
