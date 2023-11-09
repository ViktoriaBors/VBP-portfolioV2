<template>
<div class="flex flex-wrap justify-center gap-4 py-4 mx-auto">    
<div v-for="one in data" :key="one.id" class="max-w-sm m-2 border border-px border-slate rounded-xl dark:bg-cardDark dark:text-grayl dark:shadow-lg" :class="one.class">
 <!-- <img :src="one.img" alt="" class="mx-auto rounded-t-lg dark:grayscale"/> -->
  <div class="p-4">
    <img src="/img/ocean.png" class="h-6 mx-auto -mt-7" alt="">
      <h5 class="pt-4 text-xl font-medium text-gray-900">{{one.title}}</h5>
      <p class="mt-3 text-base text-gray-700">
        {{ one.desc}}
      </p>
      <a :href="one.link" target="_blank" class="flex text-blue "><ReadMoreButton class="mt-2 mr-2"/> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 mt-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>  
  </div>
</div> 
</div> 
</template>


<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import TiltBase from '../components/TiltBase.vue'

let data = [ 
    {id: 0, title: "Why I Decided to Invest in My Portfolio as a Junior Developer", class:"sm:rotate-3", desc: "As a junior developer, it's easy to overlook the importance of investing in your portfolio. Standing out in the tech industry is crucial to success. A good portfolio can help you do just that by showcasing your unique skills, experiences, and personal development.", img:'img/portfolio.jpg', link: 'https://dev.to/viktoriabors/why-i-decided-to-invest-in-my-portfolio-as-a-junior-developer-428p'},
    {id: 1, title: "From Lost to Confident", class:"sm:rotate-1", desc: "I can relate to the struggle of feeling trapped in the coding journey as maintaining motivation can be challenging. In my experience, the best way to sustain motivation is by tracking your progress throughout the journey. ", img:'img/lost.jpg', link: 'https://dev.to/viktoriabors/from-lost-to-confident-how-to-see-improvement-as-a-junior-developer-384'},
    {id: 2, title: "Maximizing Your Potential: How to Prepare for Career Fairs as a Junior Developer", class:"sm:-rotate-3",desc: "With career fairs and meet-ups just around the corner, have you considered how you will differentiate yourself and leave a lasting impression on recruiters and potential colleagues? What approach do you plan to take?", img:'img/itday.png', link: 'https://dev.to/viktoriabors/maximizing-your-potential-how-to-prepare-for-career-fairs-as-a-junior-developer-lo8'}
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