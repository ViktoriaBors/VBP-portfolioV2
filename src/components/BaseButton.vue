<template>
<button class=" text-white bg-greenv hover:italic font-bold text-sm px-4 py-2.5 text-center">
  {{text}}
  </button>
  
</template>

<script setup>
const props = defineProps([
    'text'
])
console.log(props.text)
</script>

<style>

</style>