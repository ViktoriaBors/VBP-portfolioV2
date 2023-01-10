<template>
    <div class="relative w-full h-full mx-auto sm:w-4/5 lg:w-1/2">
        <!-- Modal content -->
        <div class="relative flex flex-col text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding">
            <!-- Modal header -->
             <div
              class="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
                <img src="" alt="">
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button @click="isShow=false"  type="button" class="cursor-pointer inline-block px-6 py-2.5 bg-indigo-200 text-gray-700 font-bold text-xs leading-tight rounded shadow-md hover:bg-indigo-300 hover:shadow-lg active:bg-indigo-400 active:shadow-lg">Close</button>
            </div>
        </div>
    </div>  
</template>

<script setup>
const props = defineProps([
    'img'
])

console.log(props.img)
</script>

<style>

</style>