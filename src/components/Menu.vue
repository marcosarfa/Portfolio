<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

function getLink(route) {
  return t(route);
}
</script>

<template>
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="">
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="mailto:marcosarfa@gmail.com" type="button">E-mail</a></li>
                    <li><a href="https://www.linkedin.com/in/marcosafabian/" target="_blank" type="button">Linkedin</a></li>
                    <li><a href="https://github.com/marcosarfa" target="_blank" type="button">GitHub</a></li>
                    <li><a href="/">{{ $t('side.projects') }}</a></li>
                    <li><a :href="getLink('cv')" class="button-43" target="_blank"> {{ $t('side.cv') }}</a></li>
                </ul>
            </div>
        </nav>
</template>

<style>

a{
    text-decoration: none;
}

.navbar{
    visibility: hidden;
    height: 0px;
}

@media (max-width: 1034px) {
        
    .navbar {
        opacity: 0.95;
        visibility: inherit;
    }

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines {
        display: block;
    }

    .navbar-container {
        display: block;
        position: relative;
        height: 64px;
    }

    .navbar-container input[type="checkbox"] {
        position: absolute;
        display: block;
        height: 32px;
        width: 30px;
        top: 20px;
        left: 20px;
        z-index: 5;
        opacity: 0;
    }

    .navbar-container .hamburger-lines {
        display: block;
        height: 23px;
        width: 35px;
        position: absolute;
        top: 17px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line {
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #333;
    }

    .navbar-container .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
    }

    .navbar .menu-items {
        padding-top: 100px;
        background: #060606;
        height: 45vh;
        max-width: 300px;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -40px;
        padding-left: 50px;
        padding-right: 50px;
        transition: transform 0.5s ease-in-out;
        box-shadow: 5px 0px 10px 0px #aaa;
        z-index: 0;
    }

    .navbar .menu-items li {
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .logo {
        position: absolute;
        top: 5px;
        right: 15px;
        font-size: 2rem;
    }

    .navbar-container input[type="checkbox"]:checked~.menu-items {
        transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
        transform: rotate(35deg);
    }

    .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
        transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
        transform: rotate(-35deg);
    }
}

@media (max-height: 850px) {

    .navbar .menu-items {
        height:65vh;
    }

}

@media (max-height: 625px) {

.navbar .menu-items {
    height:80vh;
}

}

@media (max-height: 465px) {

.navbar .menu-items {
    height:100vh;
}

}

</style>