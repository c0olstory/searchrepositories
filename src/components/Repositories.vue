<template>
  <div class="flex flex-col flex-wrap">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="flex flex-col p-5 rounded-md border border-gray-300 shadow mb-10 w-11/12 self-center sm:w-full md:flex-row items-center"
      >
        <div>
          <a :href="repo.owner.html_url" class="mr-0 rounded-full flex md:mr-20 mb-10 md:mb-0">
            <img :src="repo.owner.avatar_url" alt="avatar" class="w-60 shadow-xl rounded-full">
          </a>
        </div>
        <div class="flex flex-col justify-between w-9/12">
          <div class="mb-5 flex flex-col sm:flex-row">
            <span class="text-2xl mr-2 dark:text-gray-300">Author:</span>
            <a :href="repo.owner.html_url" target="_blanc" class="text-2xl hover:underline text-blue-600">
              {{repo.owner.login}}
            </a>
          </div>
          <div class="mb-5 flex flex-col sm:flex-row">
            <span class="text-2xl mr-2 dark:text-gray-300">Repository name:</span>
            <a :href="repo.html_url" target="_blanc" class="text-2xl hover:underline text-blue-600">
              {{repo.name}}
            </a>
          </div>
          <p class="text-xl mb-5 dark:text-gray-300"><span class="text-2xl mr-2">Description:</span> {{repo.description}}</p>
          <p class="text-2xl mb-5 dark:text-gray-300"><span class="text-2xl mr-2">Language:</span> {{repo.language}}</p>   
          <p class="text-2xl dark:text-gray-300"><span class="text-2xl mr-2">Stars:</span> {{repo.stargazers_count}}</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Repositories',
  props: {
    repos:  Object,
  }
}
</script>

<style>

</style>