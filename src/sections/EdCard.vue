<template>
<div class="flex flex-col items-center justify-center gap-4 py-4 mx-auto md:flex-row md:gap-2 md:max-w-7xl">    
<Tilt :options="tiltOpt"  v-for="one in data" :key="one.id" class="max-w-sm m-2 shadow-lg rounded-xl">
  <img :src="one.img" alt="" class="h-[200px] mx-auto p-2"/>
  <div class="p-4">
      <h5 class="text-xl font-medium text-gray-900">{{one.title}}</h5>
      <h5 class="text-lg italic font-medium text-gray-900">{{one.date}}</h5>
      <p class="mb-2 text-sm italic text-gray-900 md:text-base">{{one.skills}}</p>
      <p class="text-base text-gray-700">
        <span :key='1'>{{ one.isActive.value ? one.desc.slice(0,150) :  one.desc.slice(0,150)+'...' }}</span> 
        <TransitionGroup name="fade">
         <span :key='2' v-if= one.isActive.value>{{one.desc.slice(150)}}</span>
        </TransitionGroup>
      </p>
      <ReadMoreButton class=""
            type="button"
            @click="open(one.id)" :isActive="one.isActive.value"
          />
  </div>
</Tilt> 
</div> 
</template>

<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import Tilt from 'vanilla-tilt-vue'
import { tiltOpt } from '../TiltOpt.js'

let data = [
    {id: 0, isActive: ref(false), title: "Environmental Engineering / Geology", date: "Master Degree", desc: "I studied Environmental Engineering with a focus on soil, groundwater, drinking water pollution and wastewater treatment. My geology education gave me a strong foundation in geology and the ability to solve geological problems.", img:'img/eotvos2.jpg', skills: 'Aalborg University / Eotvos Lorand University'},
    {id: 1, isActive: ref(false), title: "IT Support Specialist", date: "2022. July - 2022. September", desc: "I went through a Google certified IT-Support Specialist program that helped me to gain a deeper understanding of different network protocols, Linux command lines, Windows operating systems, and system administration.", img:'img/greenfox.jpeg', skills: 'Network protocols, Op.systems, system administration'},
    {id: 2, isActive: ref(false), title: "Full Stack Developer", date: "2022.January - Now", desc: "I completed a part-time bootcamp, where I aced the frontend module with 98% and JavaScript module with 100% on written exams. All my projects got top grades. I'm currently working on the backend module (PHP, MySQL) and hope to finish it by March. After that, I'll have a solid understanding and insight into backend development as well.", img: 'img/prooktatas.jpeg', skills: 'HTML, CSS, JavaScript, Node Js, PHP, MongoDb, MySQL'}
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