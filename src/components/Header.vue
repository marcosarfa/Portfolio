<script setup>
import { computed, ref, onMounted, getCurrentInstance } from 'vue';
import { useDark } from '@vueuse/core';
import i18n from '../locales/i18n';

const appContext = getCurrentInstance()?.app;

const isDark = useDark({
    selector: "body",
    attribute: "class",
    valueDark: "dark",
    valueLight: "light",
});

const english = ref(false)
let lang= '';

function switchLanguage() {
    if(english.value){
        lang= 'es'
        console.log(lang);
    } else{
        lang= 'en'
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
    <div class="d-flex justify-content-end">
        <div @click="switchLanguage" class="form-check form-switch">
            <input v-model="english" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label v-if="!english" class="form-check-label" for="flexSwitchCheckDefault">Change to English</label>
            <label v-else class="form-check-label" for="flexSwitchCheckDefault">Cambiar a Español</label>
        </div>
        <div class="form-check form-switch">
            <input v-model="isDark" class="form-check-input" type="checkbox" role="switch" id="Dark-Mode">
            <label v-if="!isDark" class="form-check-label" for="Dark-Mode"> {{ $t('header.dark') }}</label>
            <label v-else class="form-check-label" for="Dark-Mode"> {{ $t('header.light') }}</label>
        </div>
    </div>
</template>
<style scoped>
.d-flex {
    padding: 1rem;
}

.form-check {
    margin-right: 1rem;
}
</style>