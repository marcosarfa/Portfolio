<script setup>
import { computed, ref, onMounted, getCurrentInstance } from 'vue';
import { useDark } from '@vueuse/core';
import i18n from '../locales/i18n';
import Menu from './Menu.vue';

const appContext = getCurrentInstance()?.app;

const isDark = useDark({
    selector: "body",
    attribute: "class",
    valueDark: "dark",
    valueLight: "light",
});

const english = ref(false)
let lang = '';

function switchLanguage() {
    if (english.value) {
        lang = 'es'
        console.log(lang);
    } else {
        lang = 'en'
        console.log(lang);
    }
    i18n.global.locale.value = lang
    console.log(i18n.global.locale);
    appContext?.emit('language-changed', lang);
}

onMounted(() => {
    appContext?.$on('language-changed', (lang) => {
        console.log(`Idioma cambiado a: ${lang}`);
    });
});

</script>
<template>
    <div class="header d-flex justify-content-end">

        <Menu />
        <div class="checks d-flex justify-content-around">
            <div @click="switchLanguage" class="form-check form-switch">
                <input v-model="english" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label v-if="!english" class="form-check-label" for="flexSwitchCheckDefault">Change to English</label>
                <label v-else class="form-check-label" for="flexSwitchCheckDefault">Cambiar a Español</label>
                <img v-if="!english" src="../assets/img/english.jpg" alt="">
                <img v-else src="../assets/img/spanish.png" alt="">
            </div>
            <div class="form-check form-switch">
                <input v-model="isDark" class="form-check-input" type="checkbox" role="switch" id="Dark-Mode">
                <label v-if="!isDark" class="tdark form-check-label" for="Dark-Mode"> {{ $t('header.dark') }}</label>
                <label v-else class="tlight form-check-label" for="Dark-Mode"> {{ $t('header.light') }}</label>
                <img v-if="!isDark" src="../assets/img/moon.png" alt="">
                <img v-else src="../assets/img/sun.png" alt="">
                <!-- <img src="https://cdn2.iconfinder.com/data/icons/images-and-photography-2/24/light-mode-dark-light-1024.png" alt=""> -->
            </div>
        </div>
    </div>
</template>
<style scoped>

.form-check {
    padding-top: 0.5rem;
    margin-right: 1rem;
}

img{
    display: none;
}

@media (max-width: 1034px) {
    
    .header{
        justify-content: space-between!important;
    }

}

@media (max-width: 475px){

    img{
        display: block;
        width: 2rem;
    }
    
    label {
        display: none;
    }

}
</style>