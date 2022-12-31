<template>
<div>
<TopNavBar/>
<a href="#" id="top" class="z-50 p-4 pr-0 font-bold text-black text-xl sm:text-3xl fixed bottom-0 right-0">&#8679;</a>
<section id="home" class="relative -mt-40 pt-36">
  <div class="md:h-screen">
    <img src="img/profile3.png" alt="" class="hidden md:block absolute top-72 right-0 z-0 sepia">
    <div class="text-white md:text-black md:w-1/2 p-8 md:mt-28">
      <h1 class="text-xl font-bold pb-2">Hi There,</h1>
      <h3 class="text-3xl font-bold pb-2">I'm Viktoria Bors-Pajuste</h3>
      <ul class="pb-4">
        <li class="font-bold text-lg tracking-wide">FrontEnd Developer</li>
        <li>Geologist and Environmental Engineer</li>
        <li>Chemist and Lab Technician</li>
        <li>Wife and Mom</li>
      </ul>
      <p class="pb-2 text-justify">What does a highly educated person do, who heard enough of gaga and played way too much peekaboo?? Fell in love with WEB DEVELOPMENT.</p>
      <p>I am a self-taught/bootcamper web developer, focused on frontend technologies.</p>
    </div>
    <div id="scroll" class="hidden md:block text-brownd font-bold absolute left-1/4 -ml-14 pl-2 mt-24 lg:mt-24">Scroll Down</div>
    <div id="vl" class="hidden md:block border-l-2 absolute top-2/3 left-1/4 border-brownl">
    </div>
  </div>
</section>
<section id="skills">
  <h1 class="font-bold text-xl px-12 pt-4">.stacks</h1>
  <SkillsCard/>
</section>
<section id="about" class="bg-greenv pb-10 md:p-20 mt-24 relative">
  <div>
  <h1 class="font-bold text-white text-xl px-12 pt-6 text-right pb-2 md:pb-20">.who am i</h1>
  <ImgSlider/>
  </div>
</section>
<section id="experiences" class="mt-8">
    <h1 class="font-bold text-xl px-12 py-4">.experiences</h1>
  <ExpCard/>
</section>
<section id="projects" class="bg-brownl mt-6 pb-12">
  <div>
  <h1 class="font-bold text-black text-xl px-12 pt-6 text-right pb-2 md:pb-20">.projects</h1>
  <ProjectsCard/>
  <div class=" mx-auto text-white bg-greenv hover:italic font-bold text-sm px-4 py-2.5 text-center w-72">
  <a href="https://github.com/ViktoriaBors" target="_blank" >more projects on github >></a>
  </div>
  </div>
</section>
<section id="education" class="mt-16 pb-16 lg:w-4/5 lg:mx-auto">
  <h1 class="font-bold text-black text-xl px-12 py-4">.educations</h1>
  <EdCard/>
</section>
<section id="contact" class="bg-brownd py-12">
  <h1 class="font-bold text-white text-right text-xl px-12 py-4">.contact me</h1>
  <ContactForm/>
</section>
    
</div>
</template>

<script setup>
import TopNavBar from './components/TopNavBar.vue';
import ImgSlider from './components/ImgSlider.vue';
import ExpCard from './components/ExpCard.vue'
import EdCard from './components/EdCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
import ContactForm from './components/ContactForm.vue'
import SkillsCard from './components/SkillsCard.vue'

import {onMounted} from 'vue'

onMounted(()=>{
  swal("Still under Construction!", "Soon ready - Worth to wait", "info");
})

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
