<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <div class="container">
    <div class="flex items-center justify-center my-10 sm:w-full px-5">
      <input
        type="text"
        v-model="q"
        class="block px-5 py-5  w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-xl rounded-md sm:max-w-xs w-64 shadow hover:shadow-lg transition-all"
      >
      <button 
        v-if="mode"
        @click="changeMode"
        class="p-5 border-gray-300 border rounded-md ml-5 dark:text-gray-300 hover:shadow transition-all"
      >Light mode
      </button>
      <button
        v-else
        @click="changeMode"
        class="p-5 border-gray-300 border rounded-md ml-5 dark:text-gray-300 hover:shadow transition-all"
      >Dark mode
      </button>
    </div>
    <span v-if="!q" class="text-xl block text-center dark:text-gray-300">Start your search...</span>
    <Repositories
      v-if="!isLoading"
      :repos="repos"
    />
    <div v-else class="text-xl block text-center dark:text-gray-300">Идет загрузка...</div>
  </div>
</template>

<script>

import Repositories from './Repositories.vue'
import axios from 'axios'

export default {
  name: 'EntryField',
  data() {
    return {
      repos: null,
      q: this.$route.query.q,
      message: '',
      isLoading: false,
      mode: false
    }
  },
  components: {
    Repositories
  },
  methods: {
    search(query) {
      this.isLoading = true
      axios.get(`https://api.github.com/search/repositories?q=${query}`).then((response) => {
        this.repos = response.data.items
      })
      .catch(e => {
        this.message = e.message
        this.isLoading = false
      })
      .finally( () => {
        this.isLoading = false
      })
    },
    changeMode() {
      this.mode = !this.mode
    }
  },
  watch: {
    q: function (val) {
      this.search(val)
      this.$router.push({ query: { ...this.$route.query, q: val } })
    },
    '$route.query.q': function(val) {
      this.q = val
    },
    mode: function (val) {
      if(val) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
  },
  beforeUpdate() {
    if(!this.q) {
      this.repos = null
    }
  },
  mounted() {
    if(this.q) {
      this.search(this.q)
    }
  }
}
</script>

<style>
</style>