/*eslint no-unused-vars: 0*/
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { createStore } from 'vuex'

// Vue.use(Vuex);



export default new Vuex.Store({
// export default createStore({
  state: {
    repos: null,
    q: ''
  },
  mutations: {
    setRepos (state, payload) {
      state.data = payload
    },
  },
  getters: {
    getRepos: state => state.repos,
  },
  actions: {
    search({commit}, query) {
      axios.get(`https://api.github.com/search/repositories?q=${query}`).then((response) => {
        this.repos = response.data.items
      })
      .then(res => {
        commit('setRepos', res)
      })
    }
  }
})