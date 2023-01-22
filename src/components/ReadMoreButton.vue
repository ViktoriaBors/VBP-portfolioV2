<template>
<button class="inline font-semibold text-blue"> {{!isActive ? 'read more' : 'read less'}}</button>
</template>

<script setup>
const props = defineProps([
    'isActive'
])
</script>

<style scoped>

</style>