import { createI18n } from 'vue-i18n';

const messages = {
  es: { 
    home:{
      saludo: 'Hola! soy Marcos Ariel Fabián',
      puesto: 'Desarrollador Front-End',
      titulo: 'BIENVENIDOS A MI PORTFOLIO'
    },
    about:{
      ofMe: 'Un poco sobre mi...',
      argentino: 'Soy Argentino, siempre me gustó la computación y el desarrollo tecnológico',
      agronomo: 'Me recibí de Ing. Agrónomo y trabajé en proyectos en los que lideré grupos de trabajo y acompañé su desarrollo. Soy una persona proactiva, excelente compañero de equipo, responsable y que escucha a los demás. Disfruto mucho aprender cosas nuevas, por lo que mi objetivo es seguir creciendo para poder compartir mis experiencias y sumar nuevos conocimientos.',
      tecnologias: 'Tecnologías que manejo... por ahora:'
    },
    side:{
      projects: 'Mis Proyectos',
      cv: 'Mi Curriculum'
    },
    header:{
      dark: 'Cambiar a Modo Oscuro',
      light: 'Cambiar a Modo Claro'
    },
    cv: 'https://drive.google.com/file/d/1CqhnAdkkkHjfnQHAz0a-QqHCb3Tx1cw0/view?usp=drive_link'
   },
  en: { 
    home:{
      saludo: "Hi! I'm Marcos Ariel Fabian",
      puesto: "Front-End Developer",
      titulo: "WELCOME TO MY PORTFOLIO"
    },
    about:{
      ofMe: "A little about me...",
      argentino: "I'm Argentinian, I always liked computers and technological development",
      agronomo: "I graduated as an Agronomist Engineer but as a child I studied programming and I have always liked it. I am a proactive person, an excellent team player, responsible and a good listener. I really enjoy learning new things, so my goal is to keep growing to be able to share my experiences and add new knowledge.",
      tecnologias: "Technologies that I handle... for now:"
    },
    side:{
      projects: "My Projects",
      cv: "My CV"
    },
    header:{
      dark: "Change to Dark Mode",
      light: "Change to Light Mode"
    },
    cv: 'https://drive.google.com/file/d/1fdx1DSqqLAw166eQwrNyJ6JaA7zAr6cz/view?usp=drive_link'
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