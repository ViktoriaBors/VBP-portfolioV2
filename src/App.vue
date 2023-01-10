<template>
<div>
<TopNavBar/>
<a href="#" id="top" class="fixed bottom-0 right-0 z-50 p-4 pr-0 text-xl font-bold text-black sm:text-3xl">&#8679;</a>
<section id="home" class="relative -mt-40 pt-36">
  <div class="md:h-screen">
    <img src="img/profile3.png" alt="" class="absolute right-0 z-0 hidden md:block top-72 sepia">
    <div class="p-8 text-white md:text-black md:w-1/2 md:mt-28">
      <h1 class="pb-2 text-xl font-bold">Hi There,</h1>
      <h3 class="pb-2 text-3xl font-bold">I'm Viktoria Bors-Pajuste</h3>
      <ul class="pb-4">
        <li class="text-lg font-bold tracking-wide">FrontEnd Developer</li>
        <li>Geologist and Environmental Engineer</li>
        <li>Chemist and Lab Technician</li>
        <li>Wife and Mom</li>
      </ul>
      <p class="pb-2 text-justify">What does a highly educated person do, who heard enough of gaga and played way too much peekaboo?? Fell in love with WEB DEVELOPMENT.</p>
      <p>I am a self-taught/bootcamper web developer, focused on frontend technologies.</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 sm:inline-block">
      <BaseButton text="see CV" class="w-32 ml-8"/>
      <SecondaryButton text="contact me" class="w-32 m-2 ml-8 bg-white" />
    </div>
    <div id="scroll" class="absolute hidden pl-2 mt-24 font-bold md:block text-brownd left-1/4 -ml-14 lg:mt-24">Scroll Down</div>
    <div id="vl" class="absolute hidden border-l-2 md:block top-2/3 left-1/4 border-brownl">
    </div>
  </div>
</section>
<section id="skills">
  <h1 class="px-12 pt-4 text-xl font-bold">.stacks</h1>
  <SkillsCard/>
</section>
<section id="about" class="relative pb-10 mt-24 bg-greenv md:p-20">
  <div>
  <h1 class="px-12 pt-6 pb-2 text-xl font-bold text-right text-white md:pb-20">.who am i</h1>
  <ImgSlider/>
  </div>
</section>
<section id="experiences" class="mt-8">
    <h1 class="px-12 py-4 text-xl font-bold">.experiences</h1>
  <ExpCard/>
</section>
<section id="projects" class="pb-12 mt-6 bg-brownl">
  <div>
  <h1 class="px-12 pt-6 pb-2 text-xl font-bold text-right text-black md:pb-20">.projects</h1>
  <ProjectsCard/>
  </div>
</section>
<section id="education" class="pb-16 mt-16">
  <h1 class="px-12 py-4 text-xl font-bold text-left text-black">.educations</h1>
  <EdCard/>
</section>
<section id="contact" class="py-12 bg-brownd">
  <h1 class="px-12 py-4 text-xl font-bold text-right text-white">.contact me</h1>
  <ContactForm/>
</section>
   
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


import {onMounted} from 'vue'

defineProps(['text'])

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
  transform: skewY(5deg)
}
#about>div{
   transform: skewY(-5deg)
}
#projects{
  transform: skewY(-5deg)
}
#projects>div{
  transform: skewY(5deg)
}
#vl{
  height: 450px;
}
#scroll{
  text-shadow: #E3D7CB 4px 4px;
}
@media only screen and (min-width: 768px) {
  #home{
  background: linear-gradient(110deg, #F0F0F0 50%, #7D5A4B 50%);
    }
  }

</style>
