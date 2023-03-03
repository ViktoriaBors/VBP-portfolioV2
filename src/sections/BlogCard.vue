<template>
<div class="flex flex-col items-center justify-around gap-4 py-4 mx-auto md:flex-row">    
<TiltBase v-for="one in data" :key="one.id" class="max-w-sm m-2 shadow-lg rounded-xl bg-grayl dark:bg-cardDark dark:text-grayl dark:shadow-lg">
  <img :src="one.img" alt="" class="mx-auto rounded-t-lg dark:grayscale"/>
  <div class="p-4">
      <h5 class="text-xl font-medium text-gray-900">{{one.title}}</h5>
      <p class="mt-3 text-base text-gray-700">
        {{ one.desc}}
      </p>
      <a :href="one.link" target="_blank"><ReadMoreButton class="mt-2"></ReadMoreButton>  &#128279; </a>  
  </div>
</TiltBase> 
</div> 
</template>

<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import TiltBase from '../components/TiltBase.vue'

let data = [
    {id: 0, title: "Why I Decided to Invest in My Portfolio as a Junior Developer", desc: "As a junior developer, it's easy to overlook the importance of investing in your portfolio. Standing out in the tech industry is crucial to success. A good portfolio can help you do just that by showcasing your unique skills, experiences, and personal development.", img:'img/portfolio.jpg', link: 'https://dev.to/viktoriabors/why-i-decided-to-invest-in-my-portfolio-as-a-junior-developer-428p'},
    {id: 1, title: "From Lost to Confident", desc: "I can relate to the struggle of feeling trapped in the coding journey as maintaining motivation can be challenging. In my experience, the best way to sustain motivation is by tracking your progress throughout the journey. ", img:'img/lost.jpg', link: 'https://dev.to/viktoriabors/from-lost-to-confident-how-to-see-improvement-as-a-junior-developer-384'}
]

const isOpen = ref(false)

const open = (id) => {
  return data[id].isActive.value = !data[id].isActive.value
 }

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-to,
.fade-leave-from{
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>