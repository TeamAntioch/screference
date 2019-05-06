import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Cliffs from '@/components/Cliffs';
import Doodads from '@/components/Doodads';
import Tilesets from '@/components/Tilesets';
import Terrain from '@/components/Terrain';
import Maps from '@/components/Maps';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cliffs',
      name: 'Cliffs',
      component: Cliffs,
    },
    {
      path: '/doodads',
      name: 'Doodads',
      component: Doodads,
    },
    {
      path: '/tilesets',
      name: 'Tilesets',
      component: Tilesets,
    },
    {
      path: '/terrain',
      name: 'Terrain Gallery',
      component: Terrain,
    },
    {
      path: '/maps',
      name: 'Sample Maps',
      component: Maps,
    },
  ],
});
