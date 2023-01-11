<template>
<button class=" text-white bg-greenv font-bold text-sm px-4 py-2.5 text-center
hover:bg-[#24993F] hover:shadow-lg transition duration-300 ease-in-out">
  {{text}}
  </button>
  
</template>

<script setup>
const props = defineProps([
    'text'
])

</script>

<style>

</style>