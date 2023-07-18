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
                <img v-if="!english" src="https://cdn.pixabay.com/photo/2013/07/12/15/50/england-150397_1280.png" alt="">
                <img v-else src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Spain-2-512.png" alt="">
            </div>
            <div class="form-check form-switch">
                <input v-model="isDark" class="form-check-input" type="checkbox" role="switch" id="Dark-Mode">
                <label v-if="!isDark" class="tdark form-check-label" for="Dark-Mode"> {{ $t('header.dark') }}</label>
                <label v-else class="tlight form-check-label" for="Dark-Mode"> {{ $t('header.light') }}</label>
                <img v-if="!isDark" src="https://th.bing.com/th/id/R.aeb3c06c326e5a03e85f571f87985455?rik=vSv6lsXejotR1A&pid=ImgRaw&r=0" alt="">
                <img v-else src="https://cdn1.iconfinder.com/data/icons/web-interface-63/32/34_-_Light_Dark_Mode-512.png" alt="">
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