<template>  
<form class="rounded-lg border-2 border-dashed border-slate m-4 p-4 bg-gray ">
  <h2 class="text-lg mb-2">Send me an email</h2>
  <div class="mb-6">
    <input type="email" id="email" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" required>
  </div>
  <div class="mb-6">
    <input type="text" id="name" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required>
  </div>
  <div class="mb-6">
    <textarea id="message" rows="4" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Message comes here" required></textarea>
  </div>
  <button type="button" class="text-white bg-greenv hover:italic font-bold text-sm px-4 py-2.5 text-center sm:w-36 sm:text-left">Send email >></button>
</form>

</template>

<script setup>

</script>

<style>

</style>