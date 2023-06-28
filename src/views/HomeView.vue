<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Section from '../components/Section.vue';
import Header from '../components/Header.vue'
import AboutMe from '../components/AboutMe.vue'
import Side1 from '../components/Side1.vue';
import Side2 from '../components/Side2.vue';
</script>

<template>
  <Header />
  <main class="d-flex align-items-center justify-content-center">
    <Side1 />
    <div class="center">
      <TheWelcome />
      <AboutMe />
      <!-- <Section /> -->
    </div>
    <Side2 />
  </main>
</template>
<style scoped>

  .center{
    min-width: 50%;
    height: 100%;
  }

  @media (max-height: 924px) {
  .center{
    height: 90%;
  }  
}

@media (max-width: 1035px){

.center{
  width: 90%;
  height: 50%;
}
}

</style>