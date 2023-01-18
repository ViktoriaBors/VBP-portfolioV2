<template>
    <div class="relative max-w-5xl my-28">
        <!-- Modal content -->
        <div class="relative flex flex-col text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding">
            <!-- Modal header -->              
                <img :src="img" alt="" class="p-2 lg:p-4">
            <!-- Modal footer -->
            <div class="flex items-center justify-center p-6 space-x-2 border-t rounded-b border-greenv boder-2">
                <button @click="emit('closeModal')"  type="button" class="w-16">Close</button>
            </div>
        </div>
    </div>  
</template>

<script setup>
const props = defineProps([
    'img'
])

const emit = defineEmits(['closeModal']);

</script>

<style scoped>
button {
    position: relative;
    padding: 2px;
    margin: auto;
    color: #50AB65;
    font-weight: bolder;
    cursor: pointer;
} 
button::before,
button::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        transition: .3s ease-in-out;
    }
    
button::before {
        bottom: -5px;
        left: -5px;
        border-bottom: 1px solid #50AB65;
        border-left: 1px solid #50AB65;
}
button::after {
        right: -5px;
        top: -5px;
        border-top: 1px solid #50AB65;
        border-right: 1px solid #50AB65;
}    
button:hover::before,
button:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
}
</style>