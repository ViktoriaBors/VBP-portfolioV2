<template>
<div>
<div v-for="project in projects" :key="project.id">
 <div class="flex justify-center px-4 py-4">
        <div class="flex flex-col max-w-sm bg-white rounded-lg shadow-lg md:max-w-5xl md:flex-row">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="project.img" alt="" />
            <div class="flex flex-col justify-center p-6">
                <h5 class="text-xl font-medium text-gray-900">{{project.title}}</h5>
                <h5 class="italic font-medium text-gray-900 text-md">{{project.stacks}}</h5>
                <p v-if="windowWidth > 768" class="pt-4 text-base">
                    {{project.desc}}
                </p>
                <p v-if="windowWidth < 768" class="mt-2 mb-4 text-base text-gray-700">
                    <TransitionGroup name="fade">
                        <span :key='1'>{{ project.isActive.value ? project.desc.slice(0,100) :  project.desc.slice(0,100)+'...' }}</span>
                        <span :key='2' v-if= project.isActive.value>{{project.desc.slice(100)}}</span>
                    </TransitionGroup>
                </p>
          <ReadMoreButton class="text-sm"
            v-if="windowWidth < 768" type="button"
            @click="open(project.id)" :isActive="project.isActive.value"
          />
                <div
                    class="flex flex-row justify-around mt-4 md:mt-2">
                    <a :href="project.linkServer" target="_blank"><SecondaryButton text="live server"></SecondaryButton></a>
                    <a :href="project.linkGit" target="_blank"><SecondaryButton text="source code"></SecondaryButton></a> 
                </div>
            </div>
        </div>
  </div>
</div>
<div class="text-center">
<a href="https://github.com/ViktoriaBors" target="_blank"> <BaseButton text="read more on github >>"/></a>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import BaseButton from '../components/BaseButton.vue'

defineProps(['text'])

let projects = [
    {id:0, isActive: ref(false), title: 'SpaceRock', stacks: 'JavaScript, Node Js, Mongo DB, Vue Js, Tailwind Css', desc: 'JavaScript module exam project. SpaceRock is inspired by ESA SACF. The project is actually a CRUD application mixed with some interesting geological topic about the analogue and simulant samples from the Moon. The user can search in the database and after registration and login the user can add new sample, modify and delete sample. It has a image upload feature as well. Since then, the project has got updated and re-written in Vue Js framework.', linkServer: 'https://spacerockvue.onrender.com/', linkGit: 'https://github.com/ViktoriaBors/SpaceRockVue', img:'img/spacerock1.png' },
    {id: 1, isActive: ref(false), title: 'Bows Cafe', stacks: 'HTML, CSS, SASS, Bootstrap, Javascript', desc: 'Front end module exam project. Bows Cafe is inspired by Buens Cafe. Buens Cafe is a local LGBT+ gathering place with friendly atmosphere. It is an important topic and therefore I decided to make this static webpage about them.The project reflects my knowledge in the beginning of my journey in webdevelopment.', linkServer: 'https://examprojekt.vercel.app/', linkGit: 'https://github.com/ViktoriaBors/FrontendExamProjekt', img:'img/bows.png'}
]

const isOpen = ref(false)

const open = (id) => {
  return projects[id].isActive.value = !projects[id].isActive.value
 }

let windowWidth = ref(null)
windowWidth.value = window.innerWidth

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth
});


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
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
