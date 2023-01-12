<template>
<div id="topMenu" :class="scY > 50 ? ['w-full mx-0'] : ['w-11/12 rounded-full mx-auto']" class="sticky top-0 z-50 flex items-center justify-between h-16 bg-white shadow-md ">
            <div class="pl-2">
            <img src="img/logoNoBg.gif" width="80" class="ml-2">
            </div>
            <div class="pr-2">
            <input id="toggle" type="checkbox" class="relative hidden" v-if="windowWidth <= 768"  />
                  <label for="toggle" class="p-4 cursor-pointer hamburger" v-if="windowWidth <= 768"  @click="isOpen = !isOpen">
                    <div class="top-bun"></div>
                    <div class="meat"></div>
                    <div class="bottom-bun"></div>
                  </label>
            </div>
            <nav v-if="windowWidth > 768" class="flex flex-row gap-4 bg-white rounded-full">
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#home">.home</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#skills">.skills</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#about">.who am i</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#experiences">.experiences</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#projects">.projects</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#education">.education</a>
                    <a class="pr-2 hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#contact">.contact me</a>
            </nav>
</div>
            <Transition name="bounce">
            <div v-if="isOpen" class="fixed right-0 z-50 w-1/3 text-black">
                <nav class="flex flex-col h-screen gap-2 p-2 bg-white">
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#">.home</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#skills">.skills</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#about">.who am i</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#experiences">.experiences</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#projects">.projects</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#education">.education</a>
                    <a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#contact">.contact me</a>
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
  if(windowWidth.value > 768){
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

/**
  Hamburger
**/
.hamburger {
  z-index: 5;
}

.hamburger div {
  position: relative;
  width: 2rem;
  height: 3px;
  border-radius: 3px;
  background-color: #000000;
  margin-top: 4px;
  transition: all 0.3s ease-in-out;
}
/**
Animations
**/
#toggle:checked + .hamburger .top-bun {
  transform: rotate(-45deg);
  margin-top: 25px;
}
#toggle:checked + .hamburger .bottom-bun {
  opacity: 0;
  transform: rotate(45deg);
}
#toggle:checked + .hamburger .meat {
  transform: rotate(45deg);
  margin-top: -7px;
}

#toggle:checked + .hamburger + .nav {
  top: 0;
  transform: scale(1);
}

</style>