<template>
  <div>
    <Transition name="fade">
        <img :src= currentImg() />
    </Transition>
    <a class="prev" @click="prevImg" href="#">&#10094; Previous</a>
    <a class="next" @click="nextImg" href="#">&#10095; Next</a>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let data = [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/12/15/13/10/christmas-7657689_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/11/09/21/12/candle-7581472_960_720.jpg"
      ]

let currentIndex = ref(0)

const nextImg = () => {
    currentIndex.value = currentIndex.value + 1
    if(currentIndex.value  >= 4){
        currentIndex.value = 0
    }
}

const prevImg = () => {
    currentIndex.value = currentIndex.value - 1
    if(currentIndex.value  <= -1){
        currentIndex.value = 3
    }
}
const currentImg = () => {
      return data[currentIndex.value];
    }

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>