<template>
<div>
<TopNavBar/>
<a href="#" class="fixed z-50 flex items-center justify-center w-10 h-10 p-4 bg-white rounded-full shadow-lg bottom-1 right-1" :class="scY > 30 ? ['fixed'] : ['hidden']">
<span href="#" id="top" class="" >&#8657;</span>
</a>
<section id="home" class="">
  <HomeSection class="pt-20 pb-4 -mt-16 md:pb-0 md:pt-24 md:-mt-40" />
</section>
<section id="skills" class="flex items-center justify-center pt-6 -mb-8 pb-28 dark:bg-blackDark">
  <div>
  <h1 class="pt-8 pb-8 ml-3 text-xl font-bold dark:text-grayl">.stacks</h1>
  <SkillsCard class="max-w-7xl"/>
  </div>
</section>
<section id="about" class="py-8 md:py-24 bg-greenv dark:bg-greenBlackDark">
  <div class="mx-auto max-w-7xl">
  <h1 class="py-4 mb-4 mr-3 text-xl font-bold text-right text-grayl md:pb-8">.who am i</h1>
  <ImgSlider class="pb-8" @openModal="open"/>
  </div>
</section>
<section id="experiences" class="pt-8 pb-32 -mt-8 -mb-24 dark:bg-deepBlackDark dark:text-grayl">
  <div class="mx-auto max-w-7xl">
  <h1 class="pt-8 pb-8 ml-3 text-xl font-bold md:ml-6">.experiences</h1>
  <ExpCard class="max-w-7xl"/>
  </div>
</section>
<section id="projects" class="py-8 my-4 md:my-8 md:py-16 bg-brownl dark:bg-greengrayDark">
  <div class="mx-auto max-w-7xl">
  <h1 class="pb-2 mr-3 text-xl font-bold text-right text-black dark:text-grayl">.projects</h1>
  <ProjectsCard/>
  </div>
</section>
<section id="blog" class="pb-8 -mt-8 bg-greenv dark:bg-blackDark">
  <div class="pt-8 pb-2 mx-auto mt-8 md:pt-16 md:pb-2 max-w-7xl">
      <h1 class="ml-3 text-xl font-bold text-left md:pb-2 text-grayl pt- dark:text-grayl">.blog</h1>
      <BlogCard/>
  </div>
</section>
<section id="education" class="pb-16 -mt-16 pt-28 dark:bg-deepBlackDark">
  <div class="mx-auto max-w-7xl">
  <h1 class="pt-4 pb-8 mr-3 text-xl font-bold text-right text-black dark:text-grayl">.educations</h1>
  <EdCard />
  </div>
</section>
<section id="contact" class="bg-brownd dark:bg-greengrayDark dark:text-grayl">
  <div class="py-8 max-w-7xl xl:mx-auto">
  <h1 class="ml-3 text-xl font-bold text-left text-white">.contact me</h1>
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
import BlogCard from './sections/BlogCard.vue'
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
#home {
  background-color: #7D5A4B;
}
#about{
  transform: skewY(2deg)
}
#blog {
  transform: skewY(-2deg);
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
#blog>div{
  transform: skewY(2deg)
}


@media only screen and (min-width: 800px) {
  #home{
  background: linear-gradient(110deg, #FFFFFF 55%, #7D5A4B 45%);
    }
  }
</style>
