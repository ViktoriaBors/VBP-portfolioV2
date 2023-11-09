<template> 
<div class="flex flex-row items-center justify-between">
  <form action="https://formsubmit.io/send/viktoria.pajuste@gmail.com" method="POST"
   class="flex-1 w-1/2 p-4 m-4 border-2 border-dashed rounded-lg lg:flex-none border-slate bg-gray dark:bg-cardDark dark:border-[#50AB65]">
    <input name="_formsubmit_id" type="text" style="display:none">
    <input name="_redirect" type="hidden" id="name" value="https://www.viktoria-pajuste.hu/#contact">
    <h2 class="mb-2 text-lg">Send me an email</h2>
      <input type="email" name="email" id="email" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" required>
      <input type="text" name="name" id="name" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required>
      <textarea id="message" name="message" rows="4" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Message comes here" required></textarea>
      <BaseButton text="send an email &#187;"><input type="submit" ></BaseButton>
          <p class="pt-2 ml-1 mr-4 text-base"> Or find me on &#187;</p>
          <div class="flex flex-row items-center mt-1 ml-1">
          <a href="https://www.linkedin.com/in/viktoria-b-pajuste/"  target="_blank" class="cursor-pointer "> <img src="/img/linkedin.svg" alt="Linkedin profile" class="w-12 ml-0 cursor-pointer"> </a>
          <a href="https://dev.to/viktoriabors" target="_blank" class="cursor-pointer"> <img src="/img/dev-to.svg" alt="Dev.to profile" class="w-12 ml-1 cursor-pointer"> </a>
          </div>
  </form>
    <div class="hidden mt-4 mr-2 md:flex wrapper">
      <div class="lid one"></div>
      <div class="lid two"></div>
      <div class="envelope"></div>
      <div class="flex flex-col justify-center letter">
        <p class="pt-2 text-base font-bold"><span class="mr-2 text-xl">&#8592;</span>Write me there</p>
    </div>
    </div>
  </div> 
    <div class="w-full text-justify">
      <p class="mx-3 text-sm text-white lg:mx-0 ">
        We collect your name, email address, and message when you submit a form on the website. We use this information to respond to your message or enquiry. We protect your personal data and respect your rights under the GDPR. 
      </p>
    </div>

</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
defineProps(['text'])
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
  transition-delay: 0.8s;
   z-index: 2;
}


</style>