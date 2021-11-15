import {createRouter, createWebHistory} from "vue-router";

import Search from '../pages/Search'
import SearchQuary from '../pages/SearchQuary'

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
  },
  {
    path: '/:q',
    name: 'searchQuary',
    component: SearchQuary
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
