<template>
  <ul class="list-group">
    <li class="list-group-item list-group-item-action" v-for="track in queryTracks" :key="track.id">
      <div class="row">
      <span class="col-sm-4">
        {{track.name}}
      </span>
      <audio class="col-sm-8" :src="track.preview_url" controls="controls"></audio>
      </div>
    </li>
  </ul>

</template>

<script>
import QUERY_TRACKS from '../graphql/query-track-list.gql';

export default {
  name: 'AlbumDetail',
  props: ['album'],
  data() {
    return {
      queryTrack: null,
    };
  },
  apollo: {
    queryTracks: {
      query: QUERY_TRACKS,
      variables() {
        return {
          id: this.album.id,
        };
      },
      skip() {
        return !this.album.id;
      },
    },
  },
  methods: {

  },
};
</script>


