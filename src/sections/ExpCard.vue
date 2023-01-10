<template>
<div class="flex flex-col items-center justify-around gap-4 py-4 mx-4 md:flex-row md:items-start">    
<div v-for="one in data" :key="one.id">
  <div class="max-w-sm bg-white rounded-lg shadow-lg">
      <img class="rounded-t-lg" :src="one.img" alt=""/>
    <div class="p-6">
      <h5 class="text-xl font-medium text-gray-900">{{one.title}}</h5>
      <h5 class="text-lg italic font-medium text-gray-900">{{one.date}}</h5>
      <p class="mb-2 text-sm italic text-gray-900">{{one.skills}}</p>
      <p class="mb-4 text-base text-gray-700">
        <TransitionGroup name="fade">
        <span :key='1'>{{ one.isActive.value ? one.desc.slice(0,150) :  one.desc.slice(0,150)+'...' }}</span>
         <span :key='2' v-if= one.isActive.value>{{one.desc.slice(150)}}</span>
        </TransitionGroup>
      </p>
        <ReadMoreButton class="text-sm"
            type="button"
            @click="open(one.id)" :isActive="one.isActive.value"
          />
    </div>
  </div>
</div>
<div>
    <div class="relative max-w-sm bg-white rounded-lg shadow-lg">
        <img src="img/luck.jpg" alt="" class="rounded-lg">
        <div class="absolute inset-0 flex flex-col items-center justify-between p-6 text-white ">
            <h5 class="text-3xl font-medium text-center">Who is the lucky next?</h5>
            <h5 class="text-lg italic font-medium">I hope to see you soon here</h5>
        </div>
    </div>
</div>  
</div> 
</template>

<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'

let data = [
    {id: 0, isActive: ref(false), title: "Junior Developer", date: "2022.October - Now", desc: "Formula 400 (Hungarian Company) builds web application and software platforms for Insurance Companies. I am responsible to make updates in the product description and implement new products both in the database, on backend side (through webservices) and on frontend (visualize them on the User Interface). The project written in Vue.Js and Node.Js.", img: 'img/coverme.jpg', skills: 'JavaScript, Vue Js, Node Js'},
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
  transition: opacity 0.5s ease;
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