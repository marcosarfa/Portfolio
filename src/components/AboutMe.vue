<template>
    <div class="p-3">
        <h3>{{ $t('about.ofMe') }}</h3>

        <p class="text-center">{{ $t('about.argentino') }}</p>
        <p class="text-center">{{ $t('about.agronomo') }}</p>
    </div>

    <div class="">
        <h4>{{$t('about.tecnologias')}}</h4>
        <div class="d-flex justify-content-center">
            <img id="html" src="../assets/img/html.png" alt="HTML">
            <img id="css" src="../assets/img/css.png" alt="CSS">
            <img id="js" src="https://i.pinimg.com/originals/98/0b/a0/980ba07956ccfdf81b5060b1795cdcad.png" alt="JavaScript">
        </div>
        <div class="d-flex justify-content-center">
            <img id="bootstrap" src="../assets/img/bootstrap.png" alt="Bootstrap">
            <img id="vue" src="https://miro.medium.com/max/600/1*yeAO-nwsAqnzr7k-zoDkoQ.png" alt="Vue">
        </div>
    </div>
</template>
<style scoped>
img {
    height: 7rem;
    /* padding: 2rem; */
    margin: 1.5rem;
}

#html:hover {
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(255, 115, 0),
        inset 0 -10px 0 rgb(255, 115, 0),
        inset 20px 0 200px rgb(255, 115, 0),
        -10px 10px 105px rgb(255, 115, 0),
        10px 0 50px #16171d;
}

#css:hover {
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(68, 0, 255),
        inset 0 -10px 0 rgb(68, 0, 255),
        inset 20px 0 200px rgb(68, 0, 255),
        -10px 10px 105px rgb(68, 0, 255),
        10px 0 50px #16171d;
}

#js:hover{
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(218, 200, 38),
        inset 0 -10px 0 rgb(218, 200, 38),
        inset 20px 0 200px rgb(218, 200, 38),
        -10px 10px 105px rgb(218, 200, 38),
        10px 0 50px #16171d;
}

#bootstrap:hover{
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(166, 0, 255),
        inset 0 -10px 0 rgb(166, 0, 255),
        inset 20px 0 200px rgb(166, 0, 255),
        -10px 10px 105px rgb(166, 0, 255),
        10px 0 50px #16171d;
}

#vue:hover{
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(11, 164, 80),
        inset 0 -10px 0 rgb(11, 164, 80),
        inset 20px 0 200px rgb(11, 164, 80),
        -10px 10px 105px rgb(11, 164, 80),
        10px 0 50px #16171d;
}
</style>