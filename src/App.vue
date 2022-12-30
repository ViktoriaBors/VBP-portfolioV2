<template>
<div class="bg-greenv h-full z-0 pt-4">
  <top-nav-bar/>
  <div>
    <ImgSlider></ImgSlider>
  </div>
   <div class="mt-12">
    <ExpCard></ExpCard>
   </div>
    <div class="mt-12 pb-12">
      <EdCard></EdCard>
    </div>
    <div class="pb-12">
      <ProjectsCard></ProjectsCard>
    </div>
    <div class="p-2">
      <ContactForm></ContactForm>
    </div>
    <div>
      <SkillsCard></SkillsCard>
    </div>
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

</script>

<style>

</style>
