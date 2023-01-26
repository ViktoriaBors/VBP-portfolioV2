<template>
<div id="topMenu" :class="scY > 50 && windowWidth > 800 || windowWidth < 800 ? ['w-full mx-0'] : ['w-11/12 rounded-full mx-auto']" class="sticky top-0 flex items-center justify-between h-16 bg-white shadow-md ">
            <div class="ml-4">
            <img src="img/logoNoBg.gif" width="80" class="ml-2">
            </div>
              <div class="mr-6 hamburger"
              v-if="windowWidth < 800"
              :class="[{'open' : isOpen}]"
              @click="isOpen = !isOpen">
                <div class="hamburger-inner"></div>
              </div>
            <nav v-if="windowWidth >= 800" class="flex flex-row gap-6 rounded-full text-md lg:text-lg">
                    <a class="" href="#home">.home</a>
                    <a class="" href="#skills">.skills</a>
                    <a class="" href="#about">.who am i</a>
                    <a class="" href="#experiences">.experiences</a>
                    <a class="" href="#projects">.projects</a>
                    <a class="" href="#education">.education</a>
                    <a class="mr-4 " href="#contact">.contact me</a>
            </nav>
</div>
            <Transition name="bounce">
            <div v-if="isOpen" class="fixed right-0 z-50 w-1/2 text-black">
                <nav class="flex flex-col h-screen p-2 text-xl bg-white">
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#">.home</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5" href="#skills">.skills</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#about">.who am i</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#experiences">.experiences</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#projects">.projects</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#education">.education</a>
                    <a @click="isOpen=false" class="p-3 my-1 sm:p-5 " href="#contact">.contact me</a>
                </nav>
            </div>
            </Transition>
</template>

<script setup>
import {ref} from 'vue'
import Logo from '../components/Logo.vue'

let isOpen = ref(false)
let scY = ref(null)
let windowWidth = ref(null)
windowWidth.value = window.innerWidth

window.addEventListener('scroll', ()=>{
  scY.value = window.scrollY
})

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth
  if(windowWidth.value >= 800){
    isOpen.value = false
  }
});

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(0px);
  }
  80% { transform: translateX(50px); }
  100% { transform: translateX(0); }
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100px);
  opacity: 0
}

#topMenu{
  z-index: 5000;
}

/* Hamburger Menu */
.hamburger {
  cursor: pointer;
  display: inline-block;
  padding: 15px;
  position: relative;
  width: 40px;
}

.hamburger-inner {
  background-color: black;
  height: 4px;
  position: absolute;
  transition: all 0.2s ease;
  width: 100%;
}

.hamburger-inner::before, .hamburger-inner::after {
  background-color: black;
  content: "";
  height: 4px;
  position: absolute;
  transition: all 0.2s ease;
  width: 100%;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  top: 10px;
}

.hamburger.open .hamburger-inner {
  transform: rotate(45deg);
}

.hamburger.open .hamburger-inner::before {
  transform: rotate(90deg);
  top: 0;
}

.hamburger.open .hamburger-inner::after {
  transform: rotate(90deg);
  top: 0;
}

/* Nav animation */
nav a:after,
nav a:before {
  content: "";
  width: 0%;
  display: block;
  height: 1px;
  transition: all 0.3s ease;
  margin-top: 0px;
}

nav a:after {
  bottom: 25%;
}

nav a:before {
  top: 25%;
}

nav a:hover::after {
  width: 100%;
  height: 1px;
  bottom: 25%;
  background-color:#50AB65;
}
nav a:hover::before {
  width: 100%;
  height: 1px;
  top: 25%;
  background-color: #50AB65;
}

</style>