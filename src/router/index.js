import Vue from 'vue';
import Router from 'vue-router';
import ArtistList from '@/components/ArtistList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArtistList',
      component: ArtistList,
    },
  ],
});
