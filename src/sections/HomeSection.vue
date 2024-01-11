<template>
<div class="flex items-end justify-around mx-8 md:gap-8 md:flex-row-reverse">
    <div class="md:w-[500px]">
        <img src="img/profile2.png" alt="" class="absolute opacity-25 right-4 top-40 h-1/3 md:relative md:block md:mt-16 md:top-0 md:right-0 md:opacity-100 sepia dark:sepia-0 dark:grayscale">
    </div>
    <div class="text-white md:w-5/12 md:text-black md:mt-28 dark:text-grayl ">
      <h1 class="pb-1 text-xl font-bold">Hi There,</h1>
      <h3 class="pb-1 text-3xl font-bold">I'm Viktoria Bors-Pajuste</h3>
      <ul class="pb-4">
        <li class="text-lg font-bold tracking-wide">Software Developer</li>
        <li>Geologist and Environmental Engineer</li>
        <li>Chemist and Lab Technician</li>
        <li>Wife and Mom</li>
      </ul>
      <p class="pb-2 text-base text-justify">What does a highly educated person do when they're tired of listening to Baby Gaga and playing peek-a-boo?</p>
      <p class="pb-2 text-base text-left">She fall in love with web development, it's the ultimate cure for Gaga fatigue and peek-a-boo overload.</p>
      <p class="text-lg text-left">I am a self-taught/bootcamper web developer, focused on frontend technologies.</p>
      <div class="flex items-center gap-2 mt-8 sm:inline-block md:flex-row">
       <!--
        <a href="/img/VBP.pdf" download="ViktoriaPajusteResume"> <BaseButton text="grab CV" class="w-32" @click="isShowCv = true"/> </a>
        -->
        <a href="#contact"><SecondaryButton text="contact me" class="w-32 ml-4 bg-white" /></a>
      </div>
    </div>
</div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import SecondaryButton from '../components/SecondaryButton.vue'
</script>

<style>

</style>