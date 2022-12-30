<template> 
<div class="flex flex-row justify-around items-center">
  <form action="https://formsubmit.io/send/a9369a28-1f62-47fc-b5e3-08ba767a2631" method="POST"
   class="flex-1 lg:flex-none w-1/2 rounded-lg border-2 border-dashed border-slate m-4 p-4 bg-gray ">
    <input name="_formsubmit_id" type="text" style="display:none">
    <h2 class="text-lg mb-2">Send me an email</h2>
    <div class="mb-6">
      <input type="email" id="email" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" required>
    </div>
    <div class="mb-6">
      <input type="text" id="name" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required>
    </div>
    <div class="mb-6">
      <textarea id="message" rows="4" class="bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Message comes here" required></textarea>
    </div>
     <input value="Send an e-mail >>" type="submit" class="text-white bg-greenv hover:italic font-bold text-sm px-4 py-2.5 text-center sm:w-40 sm:text-left">
  </form>
    <div class="wrapper mt-4 mr-2 hidden md:flex">
      <div class="lid one"></div>
      <div class="lid two"></div>
      <div class="envelope"></div>
      <div class="letter">
        <p class="text-base font-bold pt-2">viktoria.pajuste@gmail.com</p>
    </div>
    </div>
  </div> 

</template>

<script setup>

</script>

<style scoped>
.wrapper {
  height: 200px;
  width: 300px;
  background-color: #50AB65;
  position: relative;
  justify-content: center;
  z-index: 0;
}

.lid {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-right: 150px solid transparent;
  border-bottom: 100px solid transparent;
  border-left: 150px solid transparent;
  transform-origin: top;
  transition: transform 0.25s linear;
}

/* Lid when closed */
.lid.one {
  border-top: 100px solid #50AB65;
  transform: rotateX(0deg);
  z-index: 3;
  transition-delay: 0.75s;
}

/* Lid when opened */
.lid.two {
  border-top: 100px solid #50AB65;
  transform: rotateX(90deg);
  z-index: 1;
  transition-delay: 0.5s;
}

.envelope {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-top: 100px solid transparent;
  border-right: 150px solid #F6F6F6;
  border-bottom: 100px solid #F6F6F6;
  border-left: 150px solid #DBDBDB;
  z-index: 3;
}

.letter {
  position: absolute;
  top: 0;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  z-index: 2;
  transition: 0.5s;
}

.letter p {
  text-align: center;
  color: #3B4049;
}

.wrapper:hover .lid.one {
    transform: rotateX(90deg);
    transition-delay: 0s;
}

.wrapper:hover .lid.two {
    transform: rotateX(180deg);
    transition-delay: 0.25s;
}

.wrapper:hover .letter {
  transform: translateY(-50px);
  transition-delay: 0.5s;
}

</style>