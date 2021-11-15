<template>
  <div class="mx-auto flex flex-col items-center bg-gray-100 min-h-screen dark:bg-gray-800">
    <EntryField />
  </div>
</template>

<script>
import EntryField from '../components/EntryField.vue'

export default {
  name: 'Search',
  components: {
    EntryField
  }
}
</script>

<style>
</style>
