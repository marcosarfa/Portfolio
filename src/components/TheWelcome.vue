<script setup>
  import { useI18n } from 'vue-i18n';

  const {t}= useI18n();
</script>

<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="d-flex align-items-center">
      <div id="profile">
        <img src="../assets/img/yo1.jpg" alt="">
      </div>
      <div>
        <h2>{{t('home.saludo')}}</h2>
        <h3>{{ t('home.puesto') }}</h3>
      </div>
    </div>

    <h1 class="p-3">{{ t('home.titulo') }}</h1>
  </div>
</template>
<style scoped>
#profile{
  position: relative;
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  border-radius: 50%;
  margin: 2%;
}

#profile img{
  z-index: -1;
  position: relative;
  bottom: 7%;
  width: 100%;
  height: auto;
}
</style>