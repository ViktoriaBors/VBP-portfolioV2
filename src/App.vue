<template>
<div>
<TopNavBar/>
<a href="#" id="top" class="fixed bottom-0 right-0 z-50 p-4 pr-0 text-xl font-bold text-black sm:text-3xl">&#8679;</a>
<section id="home" class="relative pb-12 -mt-40 pt-36">
  <div class="md:h-[800px] max-w-2xl">
    <img src="img/profile3.png" alt="" class="absolute z-0 hidden right-16 md:block top-72 sepia">
    <div class="p-8 text-white md:max-w-[350px] lg:max-w-[500px] xl:text-right xl:max-w-[650px] md:text-black md:mt-28">
      <h1 class="pb-1 text-xl font-bold">Hi There,</h1>
      <h3 class="pb-1 text-3xl font-bold">I'm Viktoria Bors-Pajuste</h3>
      <ul class="pb-4">
        <li class="text-lg font-bold tracking-wide">FrontEnd Developer</li>
        <li>Geologist and Environmental Engineer</li>
        <li>Chemist and Lab Technician</li>
        <li>Wife and Mom</li>
      </ul>
      <p class="pb-2 text-base text-justify">What does a highly educated person do when they're tired of listening to Baby Gaga and playing peek-a-boo?</p>
      <p class="pb-2 text-base text-left">She fall in love with web development, it's the ultimate cure for Gaga fatigue and peek-a-boo overload.</p>
      <p class="text-lg text-left">I am a self-taught/bootcamper web developer, focused on frontend technologies.</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 sm:inline-block">
      <a href="/img/VBP.pdf" download="ViktoriaPajusteResume"> <BaseButton text="grab CV" class="w-32 ml-8" @click="isShowCv = true"/> </a>
      <a href="#contact"><SecondaryButton text="contact me" class="w-32 m-2 ml-8 bg-white" /></a>
    </div>
    <div id="scroll" class="absolute hidden font-bold md:block text-brownd left-[120px] top-[850px] xl:left-[260px]">Scroll Down</div>
    <div class="absolute hidden border-l-2 md:block top-[880px] left-[180px] h-[300px] xl:left-[300px] border-brownd" />
  </div>
</section>
<section id="skills" class="relative mb-12">
  <h1 class="px-12 pt-4 text-xl font-bold">.stacks</h1>
  <SkillsCard class="max-w-7xl lg:mx-auto"/>
  <div class="vl absolute hidden border-l-2 md:block top-[500px] right-[180px] xl:right-[300px] h-[170px] border-greenv" />
</section>
<section id="about" class="relative pb-10 mt-24 bg-greenv md:h-[700px] xl:h-[600px]">
  <div class="vl absolute hidden border-l-2 z-10 md:block top-[0px] md:right-[180px] xl:right-[300px] md:h-[550px] xl:h-[100px] border-white" />
  <div>
  <h1 class="px-12 pt-6 pb-2 text-xl font-bold text-right text-white md:pb-12 md:pt-12">.who am i</h1>
  <ImgSlider class="max-w-7xl xl:mx-auto" @openModal="open"/>
  </div>
  <div class="vl absolute hidden border-l-2 md:block md:top-[620px] min-[800]:h-[150px] xl:top-[400px] xl:h-[205px] xl:left-[300px] left-[250px] md:h-[79px] border-white" />
</section>
<section id="experiences" class="relative mt-8 min-[800px]:h-[800px]">
    <div class="vl absolute hidden border-l-2 md:block md:-mt-[40px] xl:-mt-[50px] md:-top-[5px] xl:h-[436px] xl:left-[300px] left-[250px] md:h-[115px] border-greenv" />
    <hr class="vl hidden 2xl:block absolute h-[2px] top-[386px] w-[800px] left-[500px] border-none bg-greenv" />
    <h1 class="px-12 py-4 text-xl font-bold">.experiences</h1>
  <ExpCard class="mx-auto max-w-7xl"/>
  <div class="vl absolute hidden border-l-2 md:block md:-mt-[25px] min-[800px]:-mt-[55px] min-[800px]:top-[710px] h-[150px] xl:top-[430px] xl:h-[445px] xl:-mt-[43px] xl:right-[300px] right-[250px] border-greenv" />
</section>
<section id="projects" class=" bg-brownl md:h-[850px] relative py-12">
  <div class="vl absolute hidden border-l-2 md:block md:-mt-[45px] min-[800px]:mt-[0px] min-[800px]:top-[0px] h-[170px] min-[800px]:h-[180px] xl:right-[300px] right-[250px] border-white" />
  <div>
  <h1 class="px-12 pt-2 text-xl font-bold text-right text-black">.projects</h1>
  <ProjectsCard/>
  </div>
  <div class="vl absolute hidden border-l-2 md:block md:-mt-[55px] min-[800px]:top-[700px] h-[200px] xl:right-[300px] right-[250px] border-white" />
</section>
<section id="education" class="md:h-[750px] lg:h-[650px] relative">
  <div class="absolute hidden border-l-2 md:block md:-mt-[55px] min-[800px]:top-[0px] h-[120px] xl:right-[300px] right-[250px] lg:-mt-[65px] border-brownl" />
  <h1 class="px-12 mt-12 text-xl font-bold text-left text-black">.educations</h1>
  <EdCard />
  <div class="vl absolute hidden border-l-2 md:block md:-mt-[15px] min-[800px]:top-[585px] h-[158px] min-[800px]:h-[200px] xl:left-[300px] left-[250px] lg:-mt-[70px] border-brownl" />
</section>
<section id="contact" class="relative py-12 bg-brownd">
  <div class="absolute hidden border-l-2 md:block md:top-0 h-[123px] xl:left-[300px] left-[250px] border-white" />
  <h1 class="px-12 py-4 text-xl font-bold text-right text-white">.contact me</h1>
  <ContactForm class="max-w-7xl xl:mx-auto"/>
</section>
<div v-if="isShow" style='background-color: rgba(240,240,240,0.8)' class="fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-full overflow-x-hidden overflow-y-auto">
  <Modal @closeModal="close" :img="img"/>
</div>
   
</div>
</template>

<script setup>
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
let isShowCv = ref(false)

const open = (imgSrc) => {
  isShow.value = !isShow.value
  img.value = imgSrc
}

const close =() => {
   return isShow.value = !isShow.value
}
const closeCv =() => {
   return isShowCv.value = !isShowCv.value
}

/*
onMounted(()=>{
  swal("Still under Construction!", "Soon ready - Worth to wait", "info");
})
*/
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
#scroll{
  text-shadow: #E3D7CB 4px 4px;
}
.vl{
  z-index: -5;
}
@media only screen and (min-width: 768px) {
  #home{
  background: linear-gradient(110deg, #F0F0F0 50%, #7D5A4B 50%);
    }
  }

</style>
