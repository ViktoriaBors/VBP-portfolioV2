<template>
  <div class="w-11/12 p-2 mx-auto">
    <div v-if="windowWidth > 768"
        class="relative flex flex-col items-center xl:flex-row">
        <div class="relative xl:order-1">
            <img v-for="img in data" :key="img.id" :src= img.src 
            class="absolute max-w-md xl:max-w-2xl max-h-96 grayscale right-10"  
            :class="img.class" />
            <img :src="currentImg().src" :key="currentImg().id"
            class="relative order-1 max-w-md mr-10 cursor-pointer xl:max-w-2xl max-h-96 bounce-in" 
            :class="currentImg().class"
            @click="loadImg"
            />
        </div>
        <div class="w-full p-4 bg-white lg:rounded-l-lg">
            <div class="flex flex-col justify-around p-6 h-72 sm:h-52">
                <p class="pb-2 font-bold text-center">{{currentImg().head}}</p>
                <p>{{currentImg().desc}}</p>
            </div>
        </div>
        <span class="absolute inset-y-0 left-0 flex text-lg font-bold cursor-pointer md:mt-28 md:ml-8 xl:-ml-8 xl:mt-0 xl:justify-center xl:items-center sm:text-2xl hover:text-3xl" @click="prevImg">&#10094;</span>
        <span class="absolute inset-y-0 right-0 flex text-lg font-bold cursor-pointer md:mt-28 md:mr-8 xl:-mr-6 xl:mt-0 xl:justify-center xl:items-center sm:text-2xl hover:text-3xl" @click="nextImg">&#10095;</span>
    </div>
    <div v-if="windowWidth < 768"
         class="flex flex-col items-center justify-center">
         <div class="relative">
            <img :src="currentImg().src"
            class="w-full max-w-xl px-2 mx-auto max-h-96"  
            @click="loadImg"
            />
            <span class="absolute inset-y-0 left-0 flex items-center justify-center p-4 text-lg font-bold text-black cursor-pointer sm:text-2xl hover:text-3xl" @click="prevImg">&#10094;</span>
            <span class="absolute inset-y-0 right-0 flex items-center justify-center p-4 text-lg font-bold text-black cursor-pointer sm:text-2xl hover:text-3xl" @click="nextImg">&#10095;</span>
         </div>
            <div class="flex flex-col justify-around w-10/12 p-4 bg-white rounded-b-lg">
                <p class="text-sm font-bold text-center sm:text-base ">{{currentImg().head}}</p>
                <p class="text-sm sm:text-base">{{currentImg().desc}}</p>
            </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits(['openModal']);
const loadImg = () => {
  emit('openModal', currentImg().src)
}

let data = [
            {id:1, src: "../img/geo.jpg",head:"Down To Earth", desc:"The environment have always been a big part of me. I have survived many field trips, mapping courses and other extreme assignments. I have always loved to hike on the field or sitting in the lab behind the microscope.", class:"rotate-2"},
            {id:2, src: "./img/it.jpg", head:"IT works...Why?", desc:"Why? This is the ultimate question for a developer. It can be asked always. Why doesn't it work? Why does it work? Etc. Sometimes a beer and chips would help me to answer these questions. ", class:"rotate-3"},
            {id:3, src: "./img/family.jpg", head:"Wife, mom, friend...", desc:"... student, employee, chef. This girls has MANY NAMES. I can fulfill multiple roles and do multiple tasks per day.", class:"rotate-6"},
            {id:4, src: "./img/pol.jpg", head:"Plan C for career - Poledance", desc:"No, seriously... It is a sport that actually can give you muscles and muscle aches. I have done poledance for 2-3 years (before pregnancy) and even won one!", class:"-rotate-6"},
      ]

let currentIndex = ref(0)

const nextImg = () => {
    currentIndex.value = currentIndex.value + 1
    if(currentIndex.value  >= data.length){
        currentIndex.value = 0
    }
}

const prevImg = () => {
    currentIndex.value = currentIndex.value - 1
    if(currentIndex.value  <= -1){
        currentIndex.value = 3
    }
}
const currentImg = () => {
      return data[currentIndex.value];
    }


let windowWidth = ref(null)
windowWidth.value = window.innerWidth

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth
});

</script>

<style>
.bounce-in {
  animation: bounce-in linear;
  animation-duration: 750ms;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  250% {
    transform: scale(1.1);
  }
  50% { 
    transform: scale(1); 
  }
}

</style>