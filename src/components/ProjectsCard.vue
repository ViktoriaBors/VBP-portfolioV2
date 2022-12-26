<template>
<div v-for="project in projects" :key="project.id">
 <div class="flex justify-center px-4 py-4">
        <div class="flex flex-col max-w-sm md:max-w-5xl md:flex-row rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium">{{project.title}}</h5>
                <h5 class="text-gray-900 text-md italic font-medium">{{project.stacks}}</h5>
                <p v-if="windowWidth > 768" class="text-base pt-4">
                    {{project.desc}}
                </p>
                <p v-if="windowWidth < 768" class="text-gray-700 text-base mb-4 mt-2">
                    <TransitionGroup name="fade">
                        <span :key='1'>{{ project.isActive.value ? project.desc.slice(0,100) :  project.desc.slice(0,100)+'...' }}</span>
                        <span :key='2' v-if= project.isActive.value>{{project.desc.slice(100)}}</span>
                    </TransitionGroup>
                </p>
      <button v-if="windowWidth < 768" type="button" class="font-medium text-md border-b-2 text-greenv hover:italic text-left"
      @click="open(project.id)"> {{ !project.isActive.value ? 'read more' : 'read less' }}</button>
                <div
                    class="flex flex-row justify-around mt-4">
                    <button class="font-medium text-md border-2 p-2 text-greenv hover:italic text-left"><a :href="project.linkServer" target="_blank">live server</a></button>
                    <button class="font-medium text-md border-2 p-2 text-greenv hover:italic text-left"><a :href="project.linkGit" target="_blank">source code</a></button>
                </div>
            </div>
  </div>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
let projects = [
    {id:0, isActive: ref(false), title: 'SpaceRock', stacks: 'JavaScript, Node Js, Mongo DB, Vue Js, Tailwind Css', desc: 'JavaScript module exam project. SpaceRock is inspired by ESA SACF. The project is actually a CRUD application mixed with some interesting geological topic about the analogue and simulant samples from the Moon. The user can search in the database and after registration and login the user can add new sample, modify and delete sample. It has a image upload feature as well. Since the exam the project has got updated and re-written in Vue Js framework.', linkServer: 'https://spacerockvue.onrender.com/', linkGit: 'https://github.com/ViktoriaBors/SpaceRockVue' },
    {id: 1, isActive: ref(false), title: 'Bows Cafe', stacks: 'HTML, CSS, SASS, Bootstrap, Javascript', desc: 'Front end module exam project. Bows Cafe is inspired by Buens Cafe. Buens Cafe is a local LGBT+ gathering place with friendly atmosphere. It is an important topic and therefore I decided to make this static webpage about them.', linkServer: 'https://examprojekt.vercel.app/', linkGit: 'https://github.com/ViktoriaBors/FrontendExamProjekt'}
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
