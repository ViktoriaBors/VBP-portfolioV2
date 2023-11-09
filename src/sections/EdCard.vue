<template>
<div class="flex flex-col items-center justify-around gap-4 py-4 mx-auto md:flex-row">    
<TiltBase v-for="one in data" :key="one.id" class="max-w-sm m-2 bg-white shadow-lg rounded-xl dark:bg-cardDark dark:text-grayl dark:shadow-lg">
  <img :src="one.img" alt="" class="mx-auto rounded-t-lg dark:grayscale"/>
  <div class="p-4">
      <h5 class="text-xl font-medium text-gray-900">{{one.title}}</h5>
      <h5 class="text-lg italic font-medium text-gray-900">{{one.date}}</h5>
      <p class="mb-2 text-sm italic text-gray-900 md:text-base">{{one.skills}}</p>
      <p class="text-base text-gray-700">
        <span :key='1'>{{ one.isActive.value ? one.desc.slice(0,150) :  one.desc.slice(0,150)+'...' }}</span> 
        <Transition name="fade">
         <span :key='2' v-if= one.isActive.value>{{one.desc.slice(150)}}</span>
        </Transition>
      </p>
      <ReadMoreButton class=""
            type="button"
            @click="open(one.id)" :isActive="one.isActive.value"
          />
  </div>
</TiltBase> 
</div> 
</template>

<script setup>
import {ref} from 'vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import TiltBase from '../components/TiltBase.vue'

let data = [
    {id: 0, isActive: ref(false), title: "Environmental Engineering / Geology", date: "Master Degree", desc: "I studied Environmental Engineering with a focus on soil, groundwater, drinking water pollution and wastewater treatment. My geology education gave me a strong foundation in geology and the ability to solve geological problems.", img:'img/eotvos2.jpg', skills: 'Aalborg University and Eotvos Lorand University'},
    {id: 1, isActive: ref(false), title: "IT Support Specialist", date: "2022. July - 2022. September", desc: "I went through a Google certified IT-Support Specialist program that helped me to gain a deeper understanding of different network protocols, Linux command lines, Windows operating systems, and system administration.", img:'img/greenfox.jpg', skills: 'Network protocols, Op.systems, system administration'},
    {id: 2, isActive: ref(false), title: "Full Stack Developer", date: "2022.January - Now", desc: "I completed a part-time bootcamp, where I aced the frontend module with 98% and JavaScript module with 100% on written exams. All my projects got top grades. I'm currently working on the backend module (PHP, MySQL) and hope to finish it by March. After that, I'll have a solid understanding and insight into backend development as well.", img: 'img/prooktatas.jpg', skills: 'HTML, CSS, JavaScript, Node Js, PHP, MongoDb, MySQL'},
    {id: 3, isActive: ref(false), title: "C# (Software) Developer", date: "2023.April - 2024.January", desc: "This comprehensive C# bootcamp covers all aspects of C# programming, including its various applications. Starting with a structured introduction to the basics and Object-Oriented Programming (OOP) concepts, the course proceeds to explore Windows applications using WinForms and .NET GUI, SQL fundamentals, database connectivity, as well as web and mobile applications.", img: 'img/prooktatas.jpg', skills: 'C# basics, OOP, SQL, WinForms, .Net, Asp.Net, Xamarin'}
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