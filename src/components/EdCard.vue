<template>
<div class="mx-4 grid gap-4 grid-cols-1 md:grid-cols-3 justify-items-center">    
<div v-for="one in data" :key="one.id">
  <div class="rounded-lg shadow-lg bg-white max-w-sm flex flex-col items-center">
      <img class="" :src="one.img" alt=""/>
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
</div> 
</template>

<script setup>
import {ref} from 'vue'

let data = [
    {id: 0, isActive: ref(false), title: "Environmental Engineering / Geology", date: "Master Degree", desc: "Environmental Engineer study program with focus on  soil, groundwater, drinking water pollution and wastewater treatment. The geology education has provided advanced training in geology and geological problem solving. ", img:'img/eotvos2.jpg', skills: 'Aalborg University / Eotvos Lorand University'},
    {id: 1, isActive: ref(false), title: "IT Support Specialist", date: "2022. July - 2022. September", desc: "Google certified IT-Support Specialist program was running on Coursera as a self-learning program with mentoring program from Green Fox Academy and Inco Academy. The course consisted 5 modules (Technical support, Operating Systems, Computer networking, IT infrastructure services and IT security) which gave a powerful tool to understand different network protocols, Linux command lines, Windows operating system and system administration.  ", img:'img/greenfox.jpeg', skills: 'Network protocols, Op.systems, system administration'},
    {id: 2, isActive: ref(false), title: "Full Stack Developer", date: "2022.January - Now", desc: "Part-time bootcamp program with 5 hours per week courses and lot of individual practice time. Frontend module has been completed with 98% theory exam, JavaScript module was finished with 2 written (coding) exams with 100% . All projects got the highest grade.", img: 'img/prooktatas.jpeg', skills: 'HTML, CSS, JavaScript, Node Js, PHP, MongoDb, MySQL'}
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