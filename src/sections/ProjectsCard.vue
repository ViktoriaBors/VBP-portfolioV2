<template>
<div>
<div v-for="project in projects" :key="project.id">
 <div class="flex justify-center py-4 mx-2">
        <div class="flex flex-col max-w-md bg-white rounded-lg shadow-lg md:max-w-7xl md:flex-row dark:bg-cardDark dark:shadow-lg dark:text-grayl">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg dark:grayscale"
             :src="project.img" alt=""
             @click="loadImg"/>
            <div class="flex flex-col justify-center p-6">
                <h5 class="text-xl font-medium text-gray-900">{{project.title}}</h5>
                <h5 class="italic font-medium text-gray-900 text-md">{{project.stacks}}</h5>
                <p v-if="windowWidth >= 800" class="pt-4 text-base">
                    {{project.desc}}
                </p>
                <p v-if="windowWidth < 800" class="mt-2 text-base text-gray-700">
                        <span :key='1'>{{ project.isActive.value ? project.desc.slice(0,100) :  project.desc.slice(0,100)+'...' }}</span>
                    <Transition name="fade">
                        <span :key='2' v-if= project.isActive.value>{{project.desc.slice(100)}}</span>
                    </Transition>
                </p>
                <ReadMoreButton class="text-left"
                  v-if="windowWidth < 800" type="button"
                  @click="open(project.id)" :isActive="project.isActive.value"
                />
                <div
                    class="flex flex-row mt-4 ml-1">
                    <a  v-if="project.id == 0" href="https://fromlabtoweb.hu/itmansys/publish.zip" target="_blank" class="mr-7"><SecondaryButton text="download exe"></SecondaryButton></a>
                    <a  v-if="project.id != 0" :href="project.linkServer" target="_blank" class="mr-7"><SecondaryButton text="live server"></SecondaryButton></a>
                    <a :href="project.linkGit" target="_blank"><SecondaryButton text="source code"></SecondaryButton></a> 
                </div>
                <p v-if="project.id==0" class="inline font-semibold text-red-800 text-sm pt-2 dark:text-red-200" >Info: After download, EXTRACT the zip file then run the SETUP application file.</p>
            </div>
        </div>
  </div>
</div>
<div class="pb-6 text-center">
<a href="https://github.com/ViktoriaBors" target="_blank"> <BaseButton text="see more on github &#187;"/></a>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import ReadMoreButton from '../components/ReadMoreButton.vue'
import BaseButton from '../components/BaseButton.vue'

let projects = [
  {id:0, isActive: ref(false), title: 'IT Storage Management system', stacks: 'C#, MySQL', desc: "During the 7 months C# Basics module, I have learned the basics of C# and WinForms applications.The project itself is a storage manager system for computer parts. The main objective of this project is to create a simple CRUD (Create, Read, Update, Delete) application that enables the client to track its storage. The client can choose from 5 different computer parts and add new parts in the system or delete one. These computer parts can be connected to a given storage, where their in stock piece needs to be given. From the given storage each part can be added more or deleted some. It is possible to export the given computer part and then import it.", linkServer: '', linkGit: 'https://github.com/ViktoriaBors/itmansys', img:'img/csharp.png'},
  {id:1, isActive: ref(false), title: 'Multilingual Children Library', stacks: 'JavaScript, Vue Js, Tailwind Css, PHP, SQL', desc: "This side project was a motivation to dig deeper in PHP and SQL. As someone from a multilingual family, I know how important it is for children to learn their mother tongue. Users can search  books, and once logged in, they can issue and return a book. There is an admin platform, where 'simple' admin can change active status for books, deal with issued books when they returned. As a 'super' admin, you have the right to do ban, delete a user.", linkServer: 'https://online-library-ochre.vercel.app/', linkGit: 'https://github.com/ViktoriaBors/online-library', img:'img/library.png' },
  {id:2, isActive: ref(false), title: 'SpaceRock', stacks: 'JavaScript, Node Js, Mongo DB, Vue Js, Tailwind Css', desc: "I did a JavaScript module exam project called SpaceRock, which was inspired by ESA SACF. It's basically a CRUD app with a cool geological twist - it's all about the analogue and simulant samples from the Moon. Users can search the database, and once logged in, they can add, modify, and delete samples. It even has a feature for uploading images. I've since updated and re-written the project using the Vue.js framework.", linkServer: 'https://spacerockvue.onrender.com/', linkGit: 'https://github.com/ViktoriaBors/SpaceRockVue', img:'img/spacerock1.png' },
  {id:3, isActive: ref(false), title: 'Bows Cafe', stacks: 'HTML, CSS, SASS, Bootstrap, Javascript', desc: "I did a front-end module exam project called Bows Cafe, which was inspired by a local LGBT+ gathering place called Buens Cafe. It's an important topic and I wanted to create a static webpage about them. The project shows my early skills in web development and how I started my journey.", linkServer: 'https://examprojekt.vercel.app/', linkGit: 'https://github.com/ViktoriaBors/FrontendExamProjekt', img:'img/bows.png'},

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
  transition: opacity 0.5s ease-in;
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
