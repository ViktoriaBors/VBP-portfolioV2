<template>
<div>
<TopNavBar/>
<a href="#" id="top" :class="scY > 30 ? ['fixed'] : ['hidden']">&#8657;</a>
<section id="home" class="">
  <HomeSection class="pt-20 pb-12 -mt-16 md:pt-24 md:-mt-40" />
</section>
<section id="skills" class="mx-auto mb-12 max-w-7xl">
  <h1 class="pt-4 ml-3 text-xl font-bold">.stacks</h1>
  <SkillsCard class=""/>
</section>
<section id="about" class="pt-5 pb-10 mt-24 bg-greenv">
  <div class="mx-auto max-w-7xl">
  <h1 class="pb-2 mr-3 text-xl font-bold text-right text-white md:pb-12 md:pt-12">.who am i</h1>
  <ImgSlider class="" @openModal="open"/>
  </div>
</section>
<section id="experiences" class="pb-16 mx-auto mt-8 max-w-7xl">
    <h1 class="pt-4 ml-3 text-xl font-bold">.experiences</h1>
  <ExpCard class=""/>
</section>
<section id="projects" class="py-8 bg-brownl">
  <div class="mx-auto max-w-7xl">
  <h1 class="pb-2 mr-3 text-xl font-bold text-right text-black">.projects</h1>
  <ProjectsCard/>
  </div>
</section>
<section id="education" class="py-12 mx-auto max-w-7xl">
  <h1 class="ml-3 text-xl font-bold text-left text-black">.educations</h1>
  <EdCard />
</section>
<section id="contact" class="bg-brownd">
  <div class="py-8 max-w-7xl xl:mx-auto">
  <h1 class="mr-3 text-xl font-bold text-right text-white">.contact me</h1>
  <ContactForm class=""/>
  </div>
</section>
<div v-if="isShow" style='background-color: rgba(240,240,240,0.8)' class="fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-full overflow-x-hidden overflow-y-auto">
  <Modal @closeModal="close" :img="img"/>
</div>

</div>
</template>

<script setup>
import HomeSection from './sections/HomeSection.vue';
import TopNavBar from './sections/TopNavBar.vue';
import ImgSlider from './sections/ImgSlider.vue';
import ExpCard from './sections/ExpCard.vue'
import EdCard from './sections/EdCard.vue'
import ProjectsCard from './sections/ProjectsCard.vue'
import ContactForm from './sections/ContactForm.vue'
import SkillsCard from './sections/SkillsCard.vue'
import BaseButton from './components/BaseButton.vue'
import SecondaryButton from './components/SecondaryButton.vue'
import Modal from './components/Modal.vue'

import {onMounted, ref, } from 'vue'

defineProps(['text', 'img'])

let isShow = ref(false)
let img = ref('')

const open = (imgSrc) => {
  isShow.value = !isShow.value
  img.value = imgSrc
}

const close =() => {
   return isShow.value = !isShow.value
}

let scY = ref(null)
window.onscroll = ()=>{
  scY.value = window.scrollY
}


onMounted(()=>{
  swal("Hold on tight, this site is a work in progress!", "Check back regularly for a shiny new updates!", "info");
})

</script>

<style scoped>
#home{
  background-color: #7D5A4B;
}
#about{
  transform: skewY(2deg)
}
#about>div{
   transform: skewY(-2deg)
}
#projects{
  transform: skewY(-2deg)
}
#projects>div{
  transform: skewY(2deg)
}
#top{
  position: fixed;
  right: 15px;
  bottom: 15px;
  padding: 1rem;
  background-color:#ffffff;
  color:#000000;
  font-size: 20px;
  font-weight: 900;
  border-radius: 50%;
  z-index: 50;
  box-shadow:#F0F0F0 1px 1px 2px;
}

@media only screen and (min-width: 800px) {
  #home{
  background: linear-gradient(110deg, #F0F0F0 55%, #7D5A4B 45%);
    }
  }

</style>
