<template>
<div class="grid grid-cols-1 gap-4 py-4 sm:px-4 justify-items-center md:flex md:flex-row">
<TiltBase class=""  v-for="one in data" :key="one.id">
  <div class="max-w-xs shadow-lg sm:max-w-sm rounded-xl">
    <img class="max-w-xs p-4 sm:max-w-sm rounded-t-xl" :src="one.img" alt=""/>
    <div class="p-6 border-t-2 border-t-greenv">
      <h5 class="text-xl font-medium text-gray-900">{{one.title}}</h5>
      <h5 class="text-lg italic font-medium text-gray-900">{{one.date}}</h5>
      <p class="mb-2 text-sm italic text-gray-900">{{one.skills}}</p>
     <p class="mb-4 text-base text-gray-700">
        <span :key='1' >{{ one.isActive.value ? one.desc.slice(0,150) :  one.desc.slice(0,150)+'...' }}</span>
        <Transition name="fade">
         <span :key='2' v-if= one.isActive.value>{{one.desc.slice(150)}}</span>
        </Transition>
      </p>
        <ReadMoreButton class=""
            type="button"
            @click="open(one.id)" :isActive="one.isActive.value"
          />
    </div>
  </div>
</TiltBase>
<TiltBase class="">
    <div class="relative bg-grayl rounded-lg shadow-lg h-[520px]">
        <img src="img/luck-removebg.png" alt="" class="max-w-xs rounded-lg sm:max-w-sm">
        <div class="absolute inset-0 flex flex-col items-center justify-between text-black ">
            <h5 class="pt-6 text-3xl font-medium text-center">Who is the lucky next?</h5>
            <h5 class="pb-6 text-lg italic font-medium">I hope to see you soon here</h5>
        </div>
    </div>
</TiltBase>  
</div> 
</template>

<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import TiltBase from '../components/TiltBase.vue'

let data = [
    {id: 0, isActive: ref(false), title: "Junior Developer", date: "2022.October - Now", desc: "I work at Formula 400, a Hungarian company that builds web apps and software platforms for insurance companies. My job is to update product descriptions and implement new products by working on both the backend and frontend. On the backend, I use web services to make updates and on the frontend, I make sure the new products are visible on the user interface. The project is built using Vue.js and Node.js", img: 'img/formula400.jpg', skills: 'JavaScript, Vue Js, Node Js'},
    // {id: 1, isActive: ref(false), title: "Translator (Volunteer)", date: "2023. January - Now", desc: "The Modern JavaScript Tutorial is an incredible site to learn JavaScript. It has been translated to different languages by a group of volunteers, although the Hungarian translation process has slowed down. A group of JavaScript enthusiastic (including me) has started to make a solid plan to start up the translation process again.", img:'img/jsLogo2.jpg', skills: ''}
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