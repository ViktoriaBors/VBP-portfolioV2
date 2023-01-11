<template>
   <button >{{text}}</button>
</template>

<script setup>
const props = defineProps([
    'text'
])

</script>

<style scoped>
button {
    position: relative;
    padding: 6px;
    border: 1px solid #50AB65;
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
        top: -5px;
        left: -5px;
        border-top: 1px solid #50AB65;
        border-left: 1px solid #50AB65;
}
    
button::after {
        right: -5px;
        bottom: -5px;
        border-bottom: 1px solid #50AB65;
        border-right: 1px solid #50AB65;
}
    
button:hover::before,
button:hover::after {
        width: calc(100% + 9px);
        height: calc(100% + 9px);
}
button:hover{
        background-color: #24993F;
        color: white;
        transition: .3s ease-in-out;
}
</style>