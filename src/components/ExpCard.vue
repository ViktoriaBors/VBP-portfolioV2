<template>
<div class="mx-4 py-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center">    
<div v-for="one in data" :key="one.id">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <img class="rounded-t-lg" :src="one.img" alt=""/>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium">{{one.title}}</h5>
      <h5 class="text-gray-900 text-lg italic font-medium">{{one.date}}</h5>
      <p class="text-gray-900 text-sm italic mb-2">{{one.skills}}</p>
      <p class="text-gray-700 text-base mb-4">
        <TransitionGroup name="fade">
        <span :key='1'>{{ one.isActive.value ? one.desc.slice(0,150) :  one.desc.slice(0,150)+'...' }}</span>
         <span :key='2' v-if= one.isActive.value>{{one.desc.slice(150)}}</span>
        </TransitionGroup>
      </p>
      <button type="button" class="font-medium text-md border-b-2 text-greenv hover:italic"
      @click="open(one.id)"> {{ !one.isActive.value ? 'read more' : 'read less' }}</button>
    </div>
  </div>
</div>
<div>
    <div class="rounded-lg shadow-lg bg-white max-w-sm relative">
        <img src="img/luck.jpg" alt="" class="rounded-lg">
        <div class="p-6 absolute text-white inset-0 flex flex-col justify-between items-center ">
            <h5 class="text-3xl font-medium text-center">Who is the lucky next?</h5>
            <h5 class="text-lg italic font-medium">I hope to see you soon here</h5>
        </div>
    </div>
</div>  
</div> 
</template>

<script setup>
import {ref} from 'vue'

let data = [
    {id: 0, isActive: ref(false), title: "Junior Developer (Trainee)", date: "2022.October - Now", desc: "Formula 400 (Hungarian Company) builds web application and software platforms for Insurance Companies. I am responsible to make updates in the product description and implement new products both in the database, on backend side (through webservices) and on frontend (visualize them on the User Interface). The project written in Vue.Js and Node.Js.", img: 'img/coverme.jpg', skills: 'JavaScript, Vue Js, Node Js'},
    {id: 1, isActive: ref(false), title: "Translator (Volunteer)", date: "2023. January - Now", desc: "The Modern JavaScript Tutorial is an incredible site to learn JavaScript. It has been translated to different languages by a group of volunteers, although the Hungarian translation process has slowed down. A group of JavaScript enthusiastic (including me) has started to make a solid plan to start up the translation process again.", img:'img/jsLogo2.jpg', skills: ''}
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