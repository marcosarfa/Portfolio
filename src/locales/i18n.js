import { createI18n } from 'vue-i18n';

const messages = {
  es: { 
    home:{
      saludo: 'Hola! soy Marcos Ariel Fabián',
      puesto: 'Desarrollador Front-End',
      titulo: 'BIENVENIDOS A MI PORTFOLIO',
      deseo: 'Espero les guste'
    },
    about:{
      ofMe: 'Un poco sobre mi...',
      argentino: 'Soy Argentino, siempre me gustó la computación y el desarrollo tecnológico',
      agronomo: 'Soy Ing. Agrónomo pero de niño estudié programación y siempre me ha gustado.',
      tecnologias: 'Tecnologías que manejo... por ahora:'
    },
    side:{
      projects: 'Mis Proyectos',
      cv: 'Mi Curriculum'
    },
    header:{
      dark: 'Cambiar a Modo Oscuro',
      light: 'Cambiar a Modo Claro'
    }
   },
  en: { 
    home:{
      saludo: "Hi! I'm Marcos Ariel Fabián",
      puesto: "Front-End Developer",
      titulo: "WELCOME TO MY PORTFOLIO",
      deseo: "I hope you like it"
    },
    about:{
      ofMe: "A little about me...",
      argentino: "I'm Argentinian, I always liked computers and technological development",
      agronomo: "I'm Agricultural Engineer but when as a child I studied programming and I have always liked it.",
      tecnologias: "Technologies that I handle... for now:"
    },
    side:{
      projects: "My Projects",
      cv: "My CV"
    },
    header:{
      dark: "Change to Dark Mode",
      light: "Change to Light Mode"
    }
   }
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'en', 
    availableLocales: ['es' , 'en'],
    legacy: false,
    globalInjection: true,
    messages
  })

  export default i18n;